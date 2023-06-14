import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  title: 'Title of the site',
  description: 'Description of the site',
  plugins: [react()],
  server: {
    cors: { origin: "*" },
    proxy: {
      '/api': {
        target: 'https://cryptopanic.com/api/v1/posts/',
        changeOrigin: true,
        secure: false,
        ws: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    }
  }
})