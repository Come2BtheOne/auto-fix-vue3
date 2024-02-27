import { useAutoFix } from '@/hooks/auto-fix'
//@ts-ignore
import Wrapper from './components/wrapper/wrapper.vue'
import { App } from 'vue'

const components = [Wrapper]
// 定义 install 函数类型
declare type PluginInstallFunction = (app: App, ...options: any[]) => any

const install: PluginInstallFunction = (app: App) => {
  // 循环导入组件
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

export { useAutoFix }
export default {
  Wrapper,
  install
}
