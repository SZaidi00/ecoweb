import { colors, fonts } from './src/theme/tokens'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: colors.paper,
        panel: colors.panel,
        hairline: colors.hairline,
        ink: colors.ink,
        inkSoft: colors.inkSoft,
        muted: colors.muted,
        canopy: colors.canopy,
        focus: colors.focus,
        edge: colors.edge,
        trophic: { ...colors.trophic },
        cascade: { ...colors.cascade },
      },
      fontFamily: {
        heading: [...fonts.heading],
        sans: [...fonts.sans],
      },
    },
  },
  plugins: [],
}
