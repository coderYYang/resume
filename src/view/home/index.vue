<!--
 * @Author: yy 691335336@qq.com
 * @Date: 2022-12-01 20:05:31
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2022-12-06 19:48:09
 * @FilePath: /resume/src/view/home/index.vue
 * @Description: 首页
-->
<template>
	<div id="home" class="home">
		<div class="content width">
			<h1 class="name">{{ name }}</h1>
			<h4 class="position">{{ position }}</h4>
			<div class="line"></div>
			<p class="saying">
				The universe is uncertain,<br />
				you and I are both dark horses.
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue'
const name: Ref<string> = ref("I'M 徐 杨 杨")
const position: Ref<string> = ref('前端开发工程师')
</script>

<style lang="less" scoped>
.home {
	background-image: url(../../assets/image/home_bg1.jpg);
	background-repeat: no-repeat;
	background-position: center center;
	background-size: 100% 100%;
	width: 100%;
	height: 100%;
	.content {
		position: relative;
		top: 50%;
		transform: translateY(-50%);
		color: #fff;
		box-sizing: border-box;
		.name {
			margin-bottom: 6px;
			font-size: 30px;
		}
		.position {
			margin-bottom: 6px;
			font-size: 18px;
		}
		.saying {
			color: rgba(255, 255, 255, 0.7);
		}
	}
}
</style>
