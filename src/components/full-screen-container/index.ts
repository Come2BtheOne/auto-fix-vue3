import { App } from 'vue'
import component from './full-screen-container.vue'

component.install = (app: App) => {
  // 组件本身添加一个 install 方法, 方便独立导出
  app.component(component.name, component)
}

export default component
