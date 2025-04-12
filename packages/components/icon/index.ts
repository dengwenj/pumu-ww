import { withInstall } from '@pumu-ww/utils'
import _Icon from './src/index.vue'

// 插件再注入一些属性给组件，组件通过这个属性判断是否加了
const Icon = withInstall(_Icon)

export default Icon
