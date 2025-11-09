import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      include: ["./src/__tests__/*.test.jsx"]
    },
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/__tests__/setup.js',
  },
})
