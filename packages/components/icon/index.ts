import { withInstall } from '@pumu-ww/utils'
import _Icon from './src/index.vue'

// 插件再注入一些属性给组件，组件通过这个属性判断是否加了
const Icon = withInstall(_Icon)

export default Icon

// 这样添加的属性，可以被模版解析到类型
declare module 'vue' {
  export interface GlobalComponents {
    PIcon: typeof Icon
  }
}
