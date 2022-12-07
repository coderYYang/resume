<!--
 * @Author: yy 691335336@qq.com
 * @Date: 2022-12-01 20:05:09
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2022-12-07 16:58:45
 * @FilePath: /resume/src/view/header/index.vue
 * @Description: 导航栏
-->
<template>
	<div class="header" :style="navbarFixed">
		<ul class="navbar">
			<li
				class="navbar_item"
				v-for="(item, index) in navbarList"
				:class="{ navbar_active: item.id === activeIndex }"
				:key="item.id + index"
			>
				<a :href="item.href">{{ item.name }}</a>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { reactive, ref, Ref, onMounted, computed } from 'vue'
import type { Navbar } from '@/utils/type'

defineProps({
	activeIndex: Number,
	navbarFixed: [String, Object]
})

// 导航栏数据
const navbarList: Array<Navbar> = reactive([
	{ id: 0, name: '首页', href: '#home' },
	{ id: 1, name: '关于', href: '#about' },
	{ id: 2, name: '技术', href: '#service' },
	{ id: 3, name: '项目', href: '#project' },
	{ id: 4, name: '教育', href: '#educate' }
])
</script>

<style lang="less" scoped>
.header {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 1000;
	height: 60px;
	box-sizing: border-box;
	line-height: 60px;
	transition: all 1s;
	.navbar {
		width: 1140px;
		margin: 0 auto;
		display: flex;
		justify-content: center;
		&_item {
			a {
				padding: 8px 12px;
				margin-right: 15px;
			}
			& a:hover {
				color: #ff4d41;
			}
		}
		&_active a {
			color: #ff4d41;
		}
	}
}
// .fixed {
// 	background-color: #fff;
// 	box-shadow: 0 6px 20px 0 rgba(48, 54, 77, 0.07);
// }
</style>
