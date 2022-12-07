<!--
 * @Author: yy 691335336@qq.com
 * @Date: 2022-12-01 18:02:21
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2022-12-07 17:33:28
 * @FilePath: /resume/src/view/index.vue
 * @Description: index.vue
-->
<template>
	<Header :activeIndex="activeIndex" :navbarFixed="navbarFixed" />
	<div class="app-content">
		<Home />
		<About />
		<Service />
		<Project />
		<Educate />
		<Copyright />
	</div>
</template>

<script setup lang="ts">
import { reactive, ref, Ref, onMounted, computed, nextTick } from 'vue'
import Header from './header/index.vue'
import Home from './home/index.vue'
import About from './about/index.vue'
import Service from './service/index.vue'
import Project from './project/index.vue'
import Educate from './educate/index.vue'
import Copyright from './copyright/index.vue'

// 滚动条当前位置
let scrollY: Ref<number> = ref(0)

// 页面总高度
let allHeight: Array<number> = reactive([])

// 固定导航栏
let navbarFixed: object | string = reactive({})

// 当前高亮 navbar
const activeIndex = computed(() => {
	return allHeight.findIndex((item, index) => {
		return scrollY.value >= item && scrollY.value < allHeight[index + 1]
	})
})

onMounted(() => {
	nextTick(() => {
		// 获取所有元素计算高度
		const list = Array.from(document.querySelector('.app-content')!?.children).map((item) =>
			Math.ceil(item.clientHeight)
		)
		let height = 0
		allHeight.push(height)
		list.forEach((item) => {
			height += item - 60
			allHeight.push(height)
		})
	})

	// 滚动条事件
	document.querySelector('#app')?.addEventListener('scroll', (e: Event) => {
		const { scrollTop } = e.target as HTMLDivElement
		scrollY.value = scrollTop
		const styleObj = {
			backgroundColor: '#fff',
			boxShadow: '0 6px 20px 0 rgba(48, 54, 77, 0.07)',
			opacity: scrollTop / 200 > 1 ? 1 : scrollTop / 200
		}
		navbarFixed = scrollTop > 50 ? styleObj : ''
	})
})
</script>

<style lang="less" scoped>
.app-content {
	width: 100%;
	height: 100%;
}
</style>
