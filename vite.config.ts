import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // base: '/archive',
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: ["star-gratefully-hyena.ngrok-free.app","parrot-merry-grizzly.ngrok-free.app"]
  },
  resolve: {
    alias: {
      'fonts': '/assets/fonts',
    },
  },
})
