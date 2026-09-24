import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import { AppHeader } from '@/components/AppHeader'
import { ExplorePage } from '@/pages/ExplorePage'

// Route-level code splitting: the landing stays lean (no PixiJS / graph code
// in its bundle); web, biome, about and debug views stream in on demand.
const BiomePage = lazy(() => import('@/pages/BiomePage').then((m) => ({ default: m.BiomePage })))
const WebPage = lazy(() => import('@/pages/WebPage').then((m) => ({ default: m.WebPage })))
const AboutPage = lazy(() => import('@/pages/AboutPage').then((m) => ({ default: m.AboutPage })))
const DebugWebsPage = lazy(
  () => import('@/pages/DebugWebsPage').then((m) => ({ default: m.DebugWebsPage })),
)
const DebugPerfPage = lazy(
  () => import('@/pages/DebugPerfPage').then((m) => ({ default: m.DebugPerfPage })),
)

function RouteFallback() {
  return (
    <div className="flex h-full min-h-[320px] items-center justify-center" role="status">
      <span className="text-sm text-muted">Loading…</span>
    </div>
  )
}

export default function App() {
  return (
    <div className="flex h-screen flex-col bg-paper font-sans text-ink">
      <AppHeader />
      <main className="min-h-0 flex-1 overflow-y-auto">
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<ExplorePage />} />
            <Route path="/biome/:biomeId" element={<BiomePage />} />
            <Route path="/web/:webId" element={<WebPage />} />
            <Route path="/about" element={<AboutPage />} />
            {/* Data-review tool; route-only, intentionally not in the main nav. */}
            <Route path="/debug/webs" element={<DebugWebsPage />} />
            {/* Renderer perf harness; route-only, intentionally not in the main nav. */}
            <Route path="/debug/perf" element={<DebugPerfPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  )
}
