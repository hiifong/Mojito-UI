import en from '@/i18n/en'
import zh from '@/i18n/zh'
import type { App } from 'vue'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  legacy: false,
  locale: 'zh',
  fallbackLocale: 'en',
  messages: {
    en: en,
    zh: zh
  }
})

export const setupI18n = (app: App<Element>) => {
  app.use(i18n)
}

export { i18n }
