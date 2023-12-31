import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// 引入ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus)

app.mount('#app')
