import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Prevent vite from obscuring rust errors
  clearScreen: false,
  server: {
    // Force IPv4 loopback to prevent Windows IPv6 vs IPv4 localhost mismatches
    host: '127.0.0.1',
    port: 5173,
    // Fail immediately if port is busy instead of silently switching to 5174
    strictPort: true,
    watch: {
      // Don't watch src-tauri to prevent reload loops
      ignored: ['**/src-tauri/**'],
    },
  },
})
