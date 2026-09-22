import { useEffect, useMemo, useState } from 'react'
import { parseEcosystemWeb, parseWebIndex, type EcosystemWeb } from '@foodweb/schema'

import { getRawWebIndex, loadRawWeb } from '@/lib/webData'

/**
 * Debug route (#/debug/webs) — Phase 1 data review tool.
 *
 * Loads data/webs/index.json and the selected web, validates both at runtime
 * with the zod validators from @foodweb/schema, and pretty-prints the result
 * so the human can review the curated data in the browser. Route-only on
 * purpose: no nav link, throwaway-ok styling.
 */
export function DebugWebsPage() {
  const indexResult = useMemo(() => {
    const raw = getRawWebIndex()
    if (raw === undefined) {
      return { ok: false as const, error: 'data/webs/index.json not found in the bundled data' }
    }
    try {
      return { ok: true as const, index: parseWebIndex(raw) }
    } catch (error) {
      return { ok: false as const, error: formatError(error) }
    }
  }, [])

  const [selectedId, setSelectedId] = useState<string | null>(null)
  const activeId =
    selectedId ?? (indexResult.ok ? (indexResult.index.webs[0]?.id ?? null) : null)

  // Individual webs load on demand (lazy chunk per web); resolve async.
  const [webResult, setWebResult] = useState<
    { ok: true; web: EcosystemWeb } | { ok: false; error: string } | null
  >(null)

  useEffect(() => {
    if (!activeId) {
      setWebResult(null)
      return
    }
    let cancelled = false
    loadRawWeb(activeId).then(
      (raw) => {
        if (cancelled) return
        if (raw === undefined) {
          setWebResult({ ok: false, error: `data/webs/${activeId}.json not found` })
          return
        }
        try {
          setWebResult({ ok: true, web: parseEcosystemWeb(raw) })
        } catch (error) {
          setWebResult({ ok: false, error: formatError(error) })
        }
      },
      (error) => {
        if (!cancelled) setWebResult({ ok: false, error: formatError(error) })
      },
    )
    return () => {
      cancelled = true
    }
  }, [activeId])

  return (
    <section className="mx-auto max-w-5xl px-6 py-10">
      <h2 className="font-heading text-2xl font-semibold text-canopy">
        Debug: ecosystem web data
      </h2>
      <p className="mt-2 text-sm text-ink/70">
        Runtime validation of the files in <code>data/webs/</code> with the zod
        validators from <code>@foodweb/schema</code>. Debug route only — not
        part of the main navigation.
      </p>

      <h3 className="mt-8 font-heading text-lg font-semibold text-ink">index.json</h3>
      {indexResult.ok ? (
        <div className="mt-2 overflow-x-auto rounded border border-hairline bg-panel">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-hairline text-xs uppercase tracking-wider text-inkSoft">
                <Th>id</Th>
                <Th>name</Th>
                <Th>biome</Th>
                <Th>location</Th>
                <Th>nodes</Th>
                <Th>provenance</Th>
              </tr>
            </thead>
            <tbody>
              {indexResult.index.webs.map((entry) => (
                <tr
                  key={entry.id}
                  onClick={() => setSelectedId(entry.id)}
                  className={`cursor-pointer border-b border-hairline/60 last:border-0 hover:bg-paper ${
                    entry.id === activeId ? 'bg-paper font-medium' : ''
                  }`}
                >
                  <Td>{entry.id}</Td>
                  <Td>{entry.name}</Td>
                  <Td>{entry.biome}</Td>
                  <Td>{entry.location}</Td>
                  <Td>{entry.nodeCount}</Td>
                  <Td>{entry.provenance}</Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <ValidationError label="index.json validation failed" error={indexResult.error} />
      )}
      {indexResult.ok && (
        <StatusBadge ok>index.json: valid ({indexResult.index.webs.length} web(s))</StatusBadge>
      )}

      {webResult && (
        <>
          <h3 className="mt-10 font-heading text-lg font-semibold text-ink">
            Web: {activeId}
          </h3>
          {webResult.ok ? <WebDetail web={webResult.web} /> : (
            <ValidationError label="web validation failed" error={webResult.error} />
          )}
        </>
      )}
    </section>
  )
}

function WebDetail({ web }: { web: EcosystemWeb }) {
  const { meta } = web
  return (
    <div className="mt-2 space-y-8">
      <StatusBadge ok>schema validation: passed</StatusBadge>

      <dl className="grid gap-x-8 gap-y-2 rounded border border-hairline bg-panel p-4 text-sm sm:grid-cols-2">
        <MetaRow label="Name" value={meta.name} />
        <MetaRow label="Location" value={meta.location} />
        <MetaRow label="Biome" value={meta.biome} />
        <MetaRow label="Coordinates" value={`${meta.lat}, ${meta.lng}`} />
        <MetaRow label="Provenance" value={meta.provenance} />
        <MetaRow label="Curator" value={meta.curator} />
        <MetaRow label="Date curated" value={meta.dateCurated} />
        <MetaRow label="Source URL" value={meta.sourceUrl} />
        <MetaRow label="License note" value={meta.licenseNote} wide />
        <div className="sm:col-span-2">
          <dt className="text-xs uppercase tracking-wider text-inkSoft">Citations</dt>
          <dd>
            <ol className="mt-1 list-decimal space-y-1 pl-5">
              {meta.citations.map((citation, i) => (
                <li key={i}>{citation}</li>
              ))}
            </ol>
          </dd>
        </div>
      </dl>

      <div>
        <h4 className="font-heading text-base font-semibold text-ink">
          Nodes ({web.nodes.length})
        </h4>
        <div className="mt-2 overflow-x-auto rounded border border-hairline bg-panel">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-hairline text-xs uppercase tracking-wider text-inkSoft">
                <Th>id</Th>
                <Th>name</Th>
                <Th>kind</Th>
                <Th>trophic level</Th>
                <Th>role</Th>
                <Th>layout (x, y)</Th>
              </tr>
            </thead>
            <tbody>
              {[...web.nodes]
                .sort((a, b) => a.trophicLevel - b.trophicLevel)
                .map((node) => (
                  <tr key={node.id} className="border-b border-hairline/60 last:border-0">
                    <Td mono>{node.id}</Td>
                    <Td>{node.displayName}</Td>
                    <Td>{node.kind}</Td>
                    <Td>{node.trophicLevel}</Td>
                    <Td>{node.functionalRole}</Td>
                    <Td mono>
                      {node.layout.x}, {node.layout.y}
                    </Td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h4 className="font-heading text-base font-semibold text-ink">
          Edges ({web.edges.length})
        </h4>
        <p className="mt-1 text-xs text-inkSoft">
          Prey is eaten by predator. Weight = prey&apos;s share of the
          predator&apos;s diet from the cited source.
        </p>
        <div className="mt-2 overflow-x-auto rounded border border-hairline bg-panel">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-hairline text-xs uppercase tracking-wider text-inkSoft">
                <Th>prey</Th>
                <Th>predator</Th>
                <Th>weight</Th>
              </tr>
            </thead>
            <tbody>
              {web.edges.map((edge, i) => (
                <tr key={i} className="border-b border-hairline/60 last:border-0">
                  <Td mono>{edge.prey}</Td>
                  <Td mono>{edge.predator}</Td>
                  <Td mono>
                    {'weight' in edge ? edge.weight.toFixed(3) : 'qualitative'}
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function formatError(error: unknown): string {
  if (error instanceof Error) return error.message
  return String(error)
}

function StatusBadge({ ok, children }: { ok: boolean; children: React.ReactNode }) {
  return (
    <p
      role="status"
      className={`mt-2 inline-block rounded border px-2 py-1 text-xs font-medium ${
        ok ? 'border-canopy/40 bg-canopy/10 text-canopy' : 'border-focus/50 bg-focus/10 text-focus'
      }`}
    >
      {children}
    </p>
  )
}

function ValidationError({ label, error }: { label: string; error: string }) {
  return (
    <div className="mt-2 rounded border border-focus/50 bg-focus/10 p-3">
      <p className="text-sm font-medium text-focus">{label}</p>
      <pre className="mt-2 max-h-64 overflow-auto whitespace-pre-wrap text-xs text-ink/80">
        {error}
      </pre>
    </div>
  )
}

function MetaRow({ label, value, wide }: { label: string; value: string; wide?: boolean }) {
  return (
    <div className={wide ? 'sm:col-span-2' : undefined}>
      <dt className="text-xs uppercase tracking-wider text-inkSoft">{label}</dt>
      <dd className="break-words">{value}</dd>
    </div>
  )
}

function Th({ children }: { children: React.ReactNode }) {
  return <th className="px-3 py-2 font-medium">{children}</th>
}

function Td({ children, mono }: { children: React.ReactNode; mono?: boolean }) {
  return <td className={`px-3 py-1.5 align-top ${mono ? 'font-mono text-xs' : ''}`}>{children}</td>
}
