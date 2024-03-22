import '@/assets/scss/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import UndrawUi from 'undraw-ui'
import 'undraw-ui/dist/style.css'
import 'element-plus/es/components/message/style/css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.use(UndrawUi)

app.mount('#app')
