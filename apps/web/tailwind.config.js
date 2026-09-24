import { colors, fonts } from './src/theme/tokens'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: colors.paper,
        paper2: colors.paper2,
        panel: colors.panel,
        hairline: colors.hairline,
        ink: colors.ink,
        inkSoft: colors.inkSoft,
        muted: colors.muted,
        canopy: colors.canopy,
        canopySoft: colors.canopySoft,
        focus: colors.focus,
        accent: colors.accent,
        edge: colors.edge,
        trophic: { ...colors.trophic },
        cascade: { ...colors.cascade },
        biome: { ...colors.biome },
      },
      fontFamily: {
        heading: [...fonts.heading],
        sans: [...fonts.sans],
      },
    },
  },
  plugins: [],
}
