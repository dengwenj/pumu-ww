import { createApp, h } from 'vue'
import App from './App.vue'
import { Icon } from '@pumu-ww/components'

const app = createApp(App)
app.use(Icon)
app.mount('#app')
// TODO，自定义一个注入 name 的插件