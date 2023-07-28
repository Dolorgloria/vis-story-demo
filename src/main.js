import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'vue-fullpage.js/dist/style.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
// import './fullpage.scrollHorizontally.min' // Optional. When using fullpage extensions
import VueFullPage from 'vue-fullpage.js'

createApp(App).use(ElementPlus).use(VueFullPage).mount('#app')

