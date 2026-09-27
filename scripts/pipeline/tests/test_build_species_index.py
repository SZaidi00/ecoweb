"""Tests for scripts/pipeline/build_species_index.py.

Each test builds minimal synthetic webs in a tmp dir and runs the script via
subprocess, asserting on returncode/stdout/stderr and the written output.
"""

from __future__ import annotations

import json
import subprocess
import sys
from pathlib import Path

PIPELINE_DIR = Path(__file__).resolve().parents[1]
SCRIPT = PIPELINE_DIR / "build_species_index.py"


def run_build(*args: str) -> subprocess.CompletedProcess[str]:
    return subprocess.run(
        [sys.executable, str(SCRIPT), *args],
        capture_output=True,
        text=True,
    )


def _node(node_id: str, display_name: str, **extra: object) -> dict:
    node = {
        "id": node_id,
        "displayName": display_name,
        "kind": "species",
        "trophicLevel": 2.0,
        "description": f"Description of {display_name}.",
    }
    node.update(extra)
    return node


def _write_web(webs_dir: Path, web_id: str, nodes: list[dict]) -> None:
    web = {
        "meta": {"id": web_id, "name": web_id.title(), "biome": "test-biome"},
        "nodes": nodes,
        "edges": [],
    }
    (webs_dir / f"{web_id}.json").write_text(json.dumps(web), encoding="utf-8")


def _write_synonyms(path: Path, assertions: list[dict]) -> Path:
    synonyms = path / "synonyms.json"
    synonyms.write_text(json.dumps({"synonyms": assertions}), encoding="utf-8")
    return synonyms


def _build(tmp_path: Path, synonyms: Path | None = None) -> tuple[subprocess.CompletedProcess[str], Path]:
    webs_dir = tmp_path / "webs"
    out_dir = tmp_path / "out"
    args = ["--webs-dir", str(webs_dir), "--out-dir", str(out_dir)]
    if synonyms is not None:
        args += ["--synonyms", str(synonyms)]
    else:
        args += ["--synonyms", str(tmp_path / "nonexistent-synonyms.json")]
    return run_build(*args), out_dir


def _read_index(out_dir: Path) -> dict:
    return json.loads((out_dir / "index.json").read_text(encoding="utf-8"))


def test_exact_name_grouping_and_parenthetical_split(tmp_path: Path) -> None:
    webs_dir = tmp_path / "webs"
    webs_dir.mkdir()
    _write_web(webs_dir, "web-a", [
        _node("detritus", "Detritus"),
        _node("detritus-fom", "Detritus (fine organic matter)"),
    ])
    _write_web(webs_dir, "web-b", [_node("det", "Detritus")])

    result, out_dir = _build(tmp_path)
    assert result.returncode == 0, result.stderr

    index = _read_index(out_dir)
    assert index["entryCount"] == 2
    detritus = next(e for e in index["entries"] if e["name"] == "Detritus")
    assert detritus["webs"] == ["web-a", "web-b"]
    assert detritus["occurrences"] == [
        {"web": "web-a", "node": "detritus"},
        {"web": "web-b", "node": "det"},
    ]
    fom = next(e for e in index["entries"] if e["name"] == "Detritus (fine organic matter)")
    assert fom["slug"] == "detritus-fine-organic-matter"
    assert fom["occurrences"] == [{"web": "web-a", "node": "detritus-fom"}]


def test_synonym_merge_carries_note(tmp_path: Path) -> None:
    webs_dir = tmp_path / "webs"
    webs_dir.mkdir()
    _write_web(webs_dir, "lake-a", [_node("minnows", "Minnows")])
    _write_web(webs_dir, "lake-b", [_node("umbra-limi", "Central mudminnow")])
    synonyms = _write_synonyms(tmp_path, [
        {
            "members": [
                {"web": "lake-a", "node": "minnows"},
                {"web": "lake-b", "node": "umbra-limi"},
            ],
            "note": "Overlapping resolution, not identical taxa.",
        }
    ])

    result, out_dir = _build(tmp_path, synonyms)
    assert result.returncode == 0, result.stderr

    index = _read_index(out_dir)
    assert index["entryCount"] == 1
    entry = index["entries"][0]
    assert entry["webs"] == ["lake-a", "lake-b"]

    detail = json.loads((out_dir / "entries" / f"{entry['slug']}.json").read_text(encoding="utf-8"))
    assert detail["notes"] == ["Overlapping resolution, not identical taxa."]
    assert {o["node"] for o in detail["occurrences"]} == {"minnows", "umbra-limi"}


def test_dangling_synonym_reference_fails_without_output(tmp_path: Path) -> None:
    webs_dir = tmp_path / "webs"
    webs_dir.mkdir()
    _write_web(webs_dir, "lake-a", [_node("minnows", "Minnows")])
    synonyms = _write_synonyms(tmp_path, [
        {
            "members": [
                {"web": "lake-a", "node": "minnows"},
                {"web": "no-such-web", "node": "ghost"},
                {"web": "lake-a", "node": "ghost-node"},
            ]
        }
    ])

    result, out_dir = _build(tmp_path, synonyms)
    assert result.returncode == 1
    assert "no-such-web" in result.stderr
    assert "ghost-node" in result.stderr
    assert "FAILED" in result.stderr
    assert not (out_dir / "index.json").exists()


def test_malformed_synonyms_file_fails(tmp_path: Path) -> None:
    webs_dir = tmp_path / "webs"
    webs_dir.mkdir()
    _write_web(webs_dir, "lake-a", [_node("minnows", "Minnows")])
    synonyms = tmp_path / "synonyms.json"
    synonyms.write_text("{not json", encoding="utf-8")

    result, out_dir = _build(tmp_path, synonyms)
    assert result.returncode == 1
    assert "invalid JSON" in result.stderr
    assert not (out_dir / "index.json").exists()


def test_determinism_byte_identical_rerun(tmp_path: Path) -> None:
    webs_dir = tmp_path / "webs"
    webs_dir.mkdir()
    _write_web(webs_dir, "web-a", [
        _node("a1", "Algae"),
        _node("a2", "Zooplankton", alsoKnownAs=["Water fleas"]),
    ])
    _write_web(webs_dir, "web-b", [
        _node("b1", "algae"),
        _node("b2", "Water fleas"),
        _node("b3", "Algae!"),
    ])

    first, out_dir = _build(tmp_path)
    assert first.returncode == 0, first.stderr
    snapshot = {
        p.name: p.read_bytes()
        for p in sorted(out_dir.rglob("*.json"))
    }
    assert "index.json" in snapshot
    assert len(snapshot) > 2  # index + at least one entry file

    second, _ = _build(tmp_path)
    assert second.returncode == 0, second.stderr
    rerun = {p.name: p.read_bytes() for p in sorted(out_dir.rglob("*.json"))}
    assert rerun == snapshot


def test_also_known_as_merges_across_webs(tmp_path: Path) -> None:
    webs_dir = tmp_path / "webs"
    webs_dir.mkdir()
    _write_web(webs_dir, "web-a", [_node("x", "X", alsoKnownAs=["Y"])])
    _write_web(webs_dir, "web-b", [_node("y", "Y")])

    result, out_dir = _build(tmp_path)
    assert result.returncode == 0, result.stderr

    index = _read_index(out_dir)
    assert index["entryCount"] == 1
    entry = index["entries"][0]
    assert entry["occurrences"] == [
        {"web": "web-a", "node": "x"},
        {"web": "web-b", "node": "y"},
    ]
