import { Route, Routes } from 'react-router-dom'

import { AppHeader } from '@/components/AppHeader'
import { AboutPage } from '@/pages/AboutPage'
import { DebugWebsPage } from '@/pages/DebugWebsPage'
import { ExplorePage } from '@/pages/ExplorePage'

export default function App() {
  return (
    <div className="flex h-screen flex-col bg-paper font-sans text-ink">
      <AppHeader />
      <main className="min-h-0 flex-1 overflow-y-auto">
        <Routes>
          <Route path="/" element={<ExplorePage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* Data-review tool; route-only, intentionally not in the main nav. */}
          <Route path="/debug/webs" element={<DebugWebsPage />} />
        </Routes>
      </main>
    </div>
  )
}
