import '@/assets/scss/main.scss'
import 'element-plus/es/components/message/style/css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { ElMessage } from 'element-plus'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(ElMessage)

app.mount('#app')
