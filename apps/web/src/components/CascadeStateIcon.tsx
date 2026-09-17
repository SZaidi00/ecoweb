import type { ReactNode } from 'react'

import type { CascadeState } from '@/theme/tokens'

const glyphs: Record<CascadeState, ReactNode> = {
  /* Stress waveform */
  stressed: <path d="M3 12h4l2-6 4 12 2-6h4" />,
  /* Double chevron down */
  severe: <path d="M5 6l7 7 7-7M5 12l7 7 7-7" />,
  /* Broken ring with a cross — gone from the web */
  collapsed: (
    <>
      <circle cx="11" cy="12" r="6" strokeDasharray="3 3" />
      <path d="M16 6l5 5M21 6l-5 5" />
    </>
  ),
  /* Upward sprout — released from predation */
  released: <path d="M4 20h16M12 20V9M12 9l-4 4M12 9l4 4" />,
}

export interface CascadeStateIconProps {
  readonly state: CascadeState
  readonly className?: string
}

/**
 * Inline SVG line icon for a cascade state. State changes must never rely
 * on color alone, so every cascade color is paired with one of these icons.
 */
export function CascadeStateIcon({ state, className }: CascadeStateIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {glyphs[state]}
    </svg>
  )
}
