import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  root: '.',  // Roten är nu frontend-mappen
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
})