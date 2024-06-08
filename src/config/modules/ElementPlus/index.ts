import type { App } from 'vue'
import { ElMessage } from 'element-plus'

const components = [ElMessage]
export const setupElementPlus = (app: App<Element>) => {
  components.forEach((component) => {
    app.use(component)
  })
}
