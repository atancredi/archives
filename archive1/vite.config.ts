import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // base: '/archive1',
  plugins: [react()],
  server: {
    allowedHosts: ["star-gratefully-hyena.ngrok-free.app"]
  }
})
