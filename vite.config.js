import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  theme: {
    extend: {
      backgroundImage: {
        'grid-gray-100': 'linear-gradient(to right, #f3f4f6 1px, transparent 1px), linear-gradient(to bottom, #f3f4f6 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '4rem 4rem',
      },
    },
  },
  safelist: [
    {
      pattern: /(bg|text|border|hover|from|to)-(blue|purple|green|amber)-(400|500)/,
    },
  ],
})
