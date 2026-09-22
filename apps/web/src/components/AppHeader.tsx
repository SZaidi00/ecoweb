import { NavLink } from 'react-router-dom'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'rounded px-3 py-1.5 text-sm font-medium transition-colors',
    isActive ? 'bg-canopy text-panel' : 'text-ink hover:bg-paper',
  ].join(' ')

export function AppHeader() {
  return (
    <header className="flex items-center justify-between border-b border-hairline bg-panel px-4 py-3 sm:px-6">
      <div className="flex items-baseline gap-3">
        <h1 className="font-heading text-xl font-semibold text-canopy">
          Food Web Explorer
        </h1>
        <span className="hidden text-xs uppercase tracking-widest text-inkSoft sm:inline">
          Interactive documentary of ecosystems
        </span>
      </div>
      <nav aria-label="Primary" className="flex items-center gap-1">
        <NavLink to="/" end className={navLinkClass}>
          Explore
        </NavLink>
        <NavLink to="/about" className={navLinkClass}>
          About
        </NavLink>
      </nav>
    </header>
  )
}
