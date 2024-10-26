import '@/style/main.css'
import 'element-plus/es/components/message/style/css'
import 'floating-vue/dist/style.css'

import 'flyonui/flyonui'

import { createApp } from 'vue'
import App from '@/App.vue'
import { init } from '@/init'

const app = createApp(App)

init(app)
