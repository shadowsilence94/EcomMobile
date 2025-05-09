import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({
    // Add this configuration to fix the preamble detection issue
    jsxRuntime: 'automatic',
    babel: {
      plugins: [
        // Add any Babel plugins if needed
      ],
      babelrc: false,
      configFile: false,
    }
  })],
  server: {
    port: 3000,
    open: true,
    host: true,
    hmr: {
      // Fix WebSocket connection issues
      host: 'localhost',
      port: 3000,
      protocol: 'ws',
      clientPort: 3000
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    chunkSizeWarningLimit: 1600,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  }
})