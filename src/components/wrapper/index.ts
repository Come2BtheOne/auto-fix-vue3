import { App } from 'vue'
//@ts-ignore
import Wrapper from './wrapper.vue'

Wrapper.install = (app: App) => {
  // 组件本身添加一个 install 方法, 方便独立导出
  app.component(Wrapper.name, Wrapper)
}

export default Wrapper
