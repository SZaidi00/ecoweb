import type { EcosystemWeb } from '@foodweb/schema'
import { Route, Routes } from 'react-router-dom'

import { AppHeader } from '@/components/AppHeader'
import { AboutPage } from '@/pages/AboutPage'
import { ExplorePage } from '@/pages/ExplorePage'

/** Placeholder web — real ecosystem data arrives in Phase 1. */
const placeholderWeb: EcosystemWeb = { id: 'pending-phase-1' }
void placeholderWeb

export default function App() {
  return (
    <div className="flex h-screen flex-col bg-paper font-sans text-ink">
      <AppHeader />
      <main className="min-h-0 flex-1 overflow-y-auto">
        <Routes>
          <Route path="/" element={<ExplorePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </div>
  )
}
