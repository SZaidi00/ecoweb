import { Route, Routes } from 'react-router-dom'

import { AppHeader } from '@/components/AppHeader'
import { AboutPage } from '@/pages/AboutPage'
import { BiomePage } from '@/pages/BiomePage'
import { DebugPerfPage } from '@/pages/DebugPerfPage'
import { DebugWebsPage } from '@/pages/DebugWebsPage'
import { ExplorePage } from '@/pages/ExplorePage'
import { WebPage } from '@/pages/WebPage'

export default function App() {
  return (
    <div className="flex h-screen flex-col bg-paper font-sans text-ink">
      <AppHeader />
      <main className="min-h-0 flex-1 overflow-y-auto">
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
      </main>
    </div>
  )
}
