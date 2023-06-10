import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    cors: { origin: "*" },
    proxy: {
      '/api': {
        target: 'https://cryptopanic.com/api/v1/posts/?auth_token=eacbe41187c73aa0ba4a806774a1f04cac9341d8&kind=news&filter=hot&public=true',
        changeOrigin: true,
        secure: false,      
        ws: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    }
  }
})
