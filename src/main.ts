import '@/assets/scss/main.scss'
import 'element-plus/es/components/message/style/css'

import { createApp } from 'vue'
import App from '@/App.vue'

import { setupStore } from '@/stores'
import { setupI18n } from '@/plugins/i18n'
import { setupRouter } from '@/router'

import { ElMessage } from 'element-plus'
import PoweredBy from '@/utils/powered-by'

const init = () => {
  const app = createApp(App)
  setupStore(app)
  setupI18n(app)
  setupRouter(app)
  app.use(ElMessage)
  app.mount('#app')
  PoweredBy()
}

init()
