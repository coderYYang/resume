<!--
 * @Author: yy 691335336@qq.com
 * @Date: 2022-12-07 16:13:37
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2022-12-07 16:57:08
 * @FilePath: /resume/src/view/project/index.vue
 * @Description: 作品展示
-->
<template>
	<div id="project" class="project">
		<div class="content width">
			<h2 class="title">我的 项目<span class="title-border"></span></h2>
			<div class="project-content">
				<div class="project-item">
					<div class="item-caption">第一个项目</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { Project } from '@/utils/type'
const navbarList: Array<Project> = reactive([
	{
		id: 0,
		name: 'admin-yy',
		url: '',
		readme: ''
	}
])
</script>

<style lang="less" scoped>
.project {
	padding: 100px 0;
	.project-content {
		.project-item {
			position: relative;
			width: 33.33%;
			height: 650px;
			border: 1px solid #eee;
			border-radius: 4px;
			.item-caption {
				position: absolute;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
				background-color: rgba(35, 41, 64, 0.8);
				opacity: 0;
				transition: 0.5s ease;
				transform: scale(0);
				border-radius: 4px;
				display: flex;
				justify-content: center;
				align-items: center;
				color: #fff;
			}
			&:hover .item-caption {
				opacity: 1;
				transform: scale(1);
			}
		}
	}
}
</style>
