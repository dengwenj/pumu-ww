import { createApp, h } from 'vue'
import App from './App.vue'
import { Icon } from '@pumu-ww/components'

const plugins = [
  Icon
]

const app = createApp(App)
// 注册成全局组件
plugins.forEach((plugin) => app.use(plugin))

app.mount('#app')
