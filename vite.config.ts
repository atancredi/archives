import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // base: '/archive',
  plugins: [react()],
  server: {
    allowedHosts: ["star-gratefully-hyena.ngrok-free.app","parrot-merry-grizzly.ngrok-free.app"]
  }
})
