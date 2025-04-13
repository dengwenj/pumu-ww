import { createApp, h } from 'vue'
import App from './App.vue'
import { Icon } from '@pumu-ww/components'

const app = createApp(App)
app.use(Icon)
app.mount('#app')
