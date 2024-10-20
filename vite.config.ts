import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { PrimeVueResolver } from 'unplugin-vue-components/resolvers'
import { chunkSplitPlugin } from 'vite-plugin-chunk-split'

// https://github.com/rollup/rollup/blob/master/src/utils/sanitizeFileName.ts
// https://datatracker.ietf.org/doc/html/rfc2396
// eslint-disable-next-line no-control-regex
const INVALID_CHAR_REGEX = /[\u0000-\u001F"#$%&*+_,:;<=>?[\]^`{|}\u007F]/g // Add '_' char
// const DRIVE_LETTER_REGEX = /^[a-z]:/i

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/js/[name].[hash].js',
        chunkFileNames: 'assets/js/[name].[hash].js',
        assetFileNames(assetInfo) {
          if (assetInfo.name?.endsWith('.css')) {
            return 'assets/css/[name].[hash].[ext]'
          }
          if (['.png', '.jpg', 'jpeg', '.webp', '.svg', '.gif'].some((ext) => assetInfo.name?.endsWith(ext))) {
            return 'assets/images/[name].[hash].[ext]'
          }
          return 'assets/[name].[hash].[ext]'
        },
        sanitizeFileName(name: string): string {
          // 去掉无效的字符
          return name.replaceAll(INVALID_CHAR_REGEX, '')
        },
        minifyInternalExports: true
      }
    },
    chunkSizeWarningLimit: 2000,
    cssMinify: false
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue'],
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver(), PrimeVueResolver()]
    }),
    chunkSplitPlugin()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
