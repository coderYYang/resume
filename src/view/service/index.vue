<!--
 * @Author: yy 691335336@qq.com
 * @Date: 2022-12-02 15:53:01
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2022-12-07 15:29:24
 * @FilePath: /resume/src/view/service/index.vue
 * @Description: 技术栈
-->
<template>
	<div id="service" class="service">
		<div class="width">
			<h2 class="title">我的 技术 栈 <span class="title-border"></span></h2>
			<div class="content">
				<div
					class="item"
					:class="{ active: serviceActive.includes(item.id) }"
					v-for="item in serviceList"
					:key="item.id"
				>
					<div class="proficiency">
						<img class="logo" :src="item.logo" :alt="item.languageName" />
						<Progress :language-name="item.languageName" :color="item.color" :proficiency="item.proficiency" />
					</div>
					<h5 class="language_name">{{ item.languageName }}</h5>
					<p class="readme">{{ item.readme }}</p>
					<a class="read_more" :href="item.readMore" target="_blank">了解更多</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import type { Service } from '@/utils/type'
import Progress from '@/components/progress/index.vue'

const serviceActive: Array<number> = reactive([0, 2, 4])
const serviceList: Array<Service> = reactive([
	{
		id: 0,
		languageName: 'HTML',
		proficiency: '90',
		color: '#e06e3c',
		logo: new URL('../../assets/image/html_logo.png', import.meta.url).href,
		readme: '超文本标记语言（英语：HyperText Markup Language，简称：HTML）是一种用于创建网页的标准标记语言。',
		readMore: 'https://www.runoob.com/html/html-tutorial.html'
	},
	{
		id: 1,
		languageName: 'CSS',
		proficiency: '90',
		color: '#5c8edc',
		logo: new URL('../../assets/image/css_logo.png', import.meta.url).href,
		readme:
			'CSS (Cascading Style Sheets，层叠样式表），是一种用来为结构化文档（如 HTML 文档或 XML 应用）添加样式（字体、间距和颜色等）的计算机语言，CSS 文件扩展名为 .css。',
		readMore: 'https://www.runoob.com/css/css-tutorial.html'
	},
	{
		id: 2,
		languageName: 'JavaScript',
		proficiency: '80',
		color: '#f3e050',
		logo: new URL('../../assets/image/js_logo.png', import.meta.url).href,
		readme: 'JavaScript 是 Web 的编程语言。所有现代的 HTML 页面都可以使用 JavaScript。',
		readMore: 'https://www.runoob.com/js/js-tutorial.html'
	},
	{
		id: 3,
		languageName: 'Vue',
		proficiency: '80',
		color: '#64b687',
		logo: new URL('../../assets/image/vue_logo.png', import.meta.url).href,
		readme: 'Vue.js（读音 /vjuː/, 类似于 view） 是一套构建用户界面的渐进式框架。',
		readMore: 'https://www.runoob.com/vue3/vue3-tutorial.html'
	},
	{
		id: 4,
		languageName: 'NodeJs',
		proficiency: '60',
		color: '#86b16c',
		logo: new URL('../../assets/image/nodejs_logo.png', import.meta.url).href,
		readme:
			' Node.js 就是运行在服务端的 JavaScript。Node.js 是一个基于 Chrome JavaScript 运行时建立的一个平台。Node.js 是一个事件驱动 I/O 服务端 JavaScript 环境',
		readMore: 'https://www.runoob.com/nodejs/nodejs-tutorial.html'
	},
	{
		id: 5,
		languageName: 'Mysql',
		proficiency: '60',
		color: '#2d5877',
		logo: new URL('../../assets/image/mysql_logo.png', import.meta.url).href,
		readme:
			'MySQL 是最流行的关系型数据库管理系统，在 WEB 应用方面 MySQL 是最好的 RDBMS(Relational Database Management System：关系数据库管理系统)应用软件之一。',
		readMore: 'https://www.runoob.com/mysql/mysql-tutorial.html'
	}
])
</script>

<style lang="less" scoped>
.service {
	background-color: #fff9f9;
	padding: 100px 0;
	.content {
		display: flex;
		flex-wrap: wrap;
		.item {
			border: 1px solid rgba(255, 77, 65, 0.1);
			border-radius: 2px;
			transition: all 0.5s ease;
			padding: 30px;
			box-sizing: border-box;
			width: calc(33.33% - 40px);
			margin: 20px;
			&:hover {
				transform: scale(1.01);
				border: 1px solid #ff4d41;
			}
			.proficiency {
				display: flex;
				align-items: flex-end;

				.logo {
					width: 42px;
					height: 42px;
					margin-right: 18px;
				}
			}
			.language_name {
				font-size: 18px;
				margin: 20px 0 6px;
			}
			.readme,
			.read_more {
				color: #9090a0;
				font-size: 14px;
			}
			.read_more {
				cursor: pointer;
			}
		}
		.active {
			border: 1px solid #ff4d41;
		}
	}
}
</style>
