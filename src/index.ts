import { useAutoFix } from '@/hooks/auto-fix'
import FullScreenContainer from '@/components/full-screen-container/full-screen-container.vue'
import { App } from 'vue'

const components = [FullScreenContainer]

const AutoFix: any = {
  install(app: App) {
    // 循环导入组件
    components.forEach((component) => {
      app.component(component.name, component)
    })
  }
}

export { useAutoFix, FullScreenContainer, AutoFix }
