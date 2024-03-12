import { fileURLToPath, URL } from 'node:url'
import path from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        entryFileNames(chunkInfo) {
          if (chunkInfo.name) {
            const [name] = path.basename(chunkInfo.name.replaceAll('_', '')).split('.')
            return `assets/${name}-[hash].js`
          }
          return ''
        },
        chunkFileNames(chunkInfo) {
          if (chunkInfo.name) {
            const [name] = path.basename(chunkInfo.name.replaceAll('_', '')).split('.')
            return `assets/${name}-[hash].js`
          }
          return ''
        },
        assetFileNames(chunkInfo) {
          if (chunkInfo.name) {
            const [name, ext] = path.basename(chunkInfo.name.replaceAll('_', '')).split('.')
            return `assets/${name}-[hash].${ext}`
          }
          return ''
        }
      }
    }
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      directoryAsNamespace: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true
      }
    }
  }
})
