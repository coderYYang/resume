/*
 * @Author: yy 691335336@qq.com
 * @Date: 2022-12-01 17:54:54
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2022-12-01 21:50:52
 * @FilePath: /resume/src/router/index.ts
 * @Description: router.ts
 */
import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/view/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router