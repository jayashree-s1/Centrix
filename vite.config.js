import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      ignored: ['**/dist/**', '**/dist.zip'],
    },
    proxy: {
      '/sns-api': {
        target: 'https://api.agents.snsihub.ai',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/sns-api/, ''),
      },
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
      },
      '/assets/generated': {
        target: 'http://localhost:4000',
        changeOrigin: true,
      },
    },
    fs: {
      allow: [
        '.',
        'C:/Users/senth/OneDrive/Desktop/templates'
      ]
    }
  },
})
