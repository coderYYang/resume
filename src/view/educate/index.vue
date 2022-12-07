<!--
 * @Author: yy 691335336@qq.com
 * @Date: 2022-12-07 16:59:09
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2022-12-07 17:32:50
 * @FilePath: /resume/src/view/educate/index.vue
 * @Description: 教育
-->
<template>
	<div id="educate" class="educate">
		<div class="content width">
			<h2 class="title">教育 经历<span class="title-border"></span></h2>
			<div class="educate-content">
				<div class="educate-item" v-for="item in educateList" :key="item.id">
					<div class="logo">
						<img v-if="item.logo" class="logo-icon" :src="item.logo" :alt="item.schoolName" />
						<h2 v-else>{{ item.schoolName.substring(0, 1) }}</h2>
					</div>
					<div class="info">
						<div class="time">{{ item.startTime }} - {{ item.endTime }}</div>
						<div class="name">{{ item.schoolName }}</div>
						<div class="readme">{{ item.schoolReadme }}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { Educate } from '@/utils/type'

const educateList: Array<Educate> = reactive([
	{
		id: 0,
		logo: new URL('../../assets/image/hkez_logo.jpg', import.meta.url).href,
		startTime: '2007-09',
		endTime: '2012-06',
		schoolName: '锦峰实验学校',
		schoolReadme: '...'
	}
])
</script>

<style lang="less" scoped>
.educate {
	padding: 100px 0;
	background-color: #fff9f9;
	.educate-content {
		display: flex;
		.educate-item {
			display: flex;
			width: calc(50% - 24px);
			margin: 12px;
			.logo {
				width: 65px;
				height: 80px;
				line-height: 80px;
				padding: 12px;
				border: 1px solid rgba(255, 77, 65, 0.1);
				box-sizing: border-box;
				border-radius: 4px;
				background-color: #fff;
				img {
					width: 100%;
					height: auto;
				}
			}
			.info {
				width: calc(100% - 65px);
				padding-left: 12px;
				.time,
				.readme {
					color: #9090a0;
					font-weight: 500;
					font-size: 13px;
				}
				.name {
					font-size: 18px;
					font-family: 'Poppins', sans-serif;
					font-weight: bold;
					color: #232940;
				}
			}
		}
	}
}
</style>
