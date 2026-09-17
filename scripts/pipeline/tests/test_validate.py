"""Tests for scripts/pipeline/validate.py.

Fixtures live in ./fixtures (deliberately NOT in data/webs/). The broken
fixtures each violate exactly one hard-fail rule; the warnings-only fixture
must pass with exit code 0 while printing warnings.
"""

from __future__ import annotations

import json
import shutil
import subprocess
import sys
from pathlib import Path

import pytest

PIPELINE_DIR = Path(__file__).resolve().parents[1]
VALIDATE_PY = PIPELINE_DIR / "validate.py"
CONVERT_PY = PIPELINE_DIR / "convert_template.py"
FIXTURES = Path(__file__).resolve().parent / "fixtures"


def run_validate(*args: str) -> subprocess.CompletedProcess[str]:
    return subprocess.run(
        [sys.executable, str(VALIDATE_PY), *args],
        capture_output=True,
        text=True,
    )


def test_valid_fixture_passes() -> None:
    result = run_validate(str(FIXTURES / "valid.web.json"))
    assert result.returncode == 0, result.stdout
    assert "OK" in result.stdout


def test_26_nodes_is_rejected() -> None:
    result = run_validate(str(FIXTURES / "invalid-26-nodes.web.json"))
    assert result.returncode == 1
    assert "25-node ceiling" in result.stdout


def test_dangling_edge_reference_is_rejected() -> None:
    result = run_validate(str(FIXTURES / "invalid-dangling-edge.web.json"))
    assert result.returncode == 1
    assert "dangling reference" in result.stdout
    assert "ghost-squid" in result.stdout


def test_missing_citation_is_rejected() -> None:
    result = run_validate(str(FIXTURES / "invalid-missing-citation.web.json"))
    assert result.returncode == 1
    assert "citations" in result.stdout


def test_non_species_node_without_aggregation_statement_is_rejected() -> None:
    result = run_validate(str(FIXTURES / "invalid-missing-aggregation.web.json"))
    assert result.returncode == 1
    assert "aggregation statement" in result.stdout
    assert "phytoplankton" in result.stdout


def test_warnings_do_not_fail_the_run() -> None:
    """Isolated nodes and trophic-level inversions warn but exit 0."""
    result = run_validate(str(FIXTURES / "warnings-only.web.json"))
    assert result.returncode == 0, result.stdout
    assert "isolated" in result.stdout
    assert "trophic-level inversion" in result.stdout
    assert "warning" in result.stdout


def _copy_valid_web(webs_dir: Path) -> dict:
    web = json.loads((FIXTURES / "valid.web.json").read_text(encoding="utf-8"))
    shutil.copy(FIXTURES / "valid.web.json", webs_dir / f"{web['meta']['id']}.json")
    return web


def _write_index(webs_dir: Path, entry: dict) -> None:
    (webs_dir / "index.json").write_text(json.dumps({"webs": [entry]}), encoding="utf-8")


def _entry_for(web: dict, **overrides: object) -> dict:
    entry = {
        "id": web["meta"]["id"],
        "name": web["meta"]["name"],
        "biome": web["meta"]["biome"],
        "location": web["meta"]["location"],
        "nodeCount": len(web["nodes"]),
        "provenance": web["meta"]["provenance"],
    }
    entry.update(overrides)
    return entry


def test_matching_index_passes(tmp_path: Path) -> None:
    web = _copy_valid_web(tmp_path)
    _write_index(tmp_path, _entry_for(web))
    result = run_validate("--webs-dir", str(tmp_path))
    assert result.returncode == 0, result.stdout


@pytest.mark.parametrize(
    ("override", "fragment"),
    [
        ({"nodeCount": 99}, "nodeCount 99 does not match"),
        ({"biome": "desert"}, "biome 'desert' does not match"),
        ({"name": "Wrong Name"}, "does not match"),
        ({"id": "no-such-web"}, "no valid web file 'no-such-web.json'"),
    ],
)
def test_mismatched_index_entry_is_rejected(
    tmp_path: Path, override: dict, fragment: str
) -> None:
    web = _copy_valid_web(tmp_path)
    _write_index(tmp_path, _entry_for(web, **override))
    result = run_validate("--webs-dir", str(tmp_path))
    assert result.returncode == 1
    assert fragment in result.stdout


def test_unregistered_web_file_is_rejected(tmp_path: Path) -> None:
    _copy_valid_web(tmp_path)
    _write_index(tmp_path, _entry_for({"meta": {"id": "other-web", "name": "x", "biome": "marine", "location": "y", "provenance": "empirical"}, "nodes": [{}]}))
    result = run_validate("--webs-dir", str(tmp_path))
    assert result.returncode == 1
    assert "not registered" in result.stdout


def test_empty_webs_dir_with_empty_index_passes(tmp_path: Path) -> None:
    (tmp_path / "index.json").write_text('{"webs": []}', encoding="utf-8")
    result = run_validate("--webs-dir", str(tmp_path))
    assert result.returncode == 0, result.stdout


def test_convert_template_output_is_valid(tmp_path: Path) -> None:
    """The converter skeleton must emit schema-valid JSON that validate.py accepts."""
    out = tmp_path / "converted.web.json"
    convert = subprocess.run(
        [sys.executable, str(CONVERT_PY), str(out)],
        capture_output=True,
        text=True,
    )
    assert convert.returncode == 0, convert.stderr
    result = run_validate(str(out))
    assert result.returncode == 0, result.stdout
