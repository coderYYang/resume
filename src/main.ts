/*
 * @Author: yy 691335336@qq.com
 * @Date: 2022-12-01 17:53:33
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2022-12-02 13:28:00
 * @FilePath: /resume/src/main.ts
 * @Description: main.ts
 */
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './style.css'
import './assets/icon/iconfont.css'
import './assets/icon/iconfont.js'

const app = createApp(App)

app.use(router)
app.mount('#app')
