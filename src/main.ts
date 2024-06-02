import '@/assets/scss/main.scss'
import 'element-plus/es/components/message/style/css'

import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'

import { setupStore } from '@/stores'
import { setupI18n } from '@/plugins/i18n'

import { ElMessage } from 'element-plus'

const init = () => {
  const app = createApp(App)
  setupStore(app)
  setupI18n(app)
  app.use(router)
  app.use(ElMessage)
  app.mount('#app')
}

init()
