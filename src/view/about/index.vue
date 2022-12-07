<!--
 * @Author: yy 691335336@qq.com
 * @Date: 2022-12-02 10:38:29
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2022-12-02 17:49:07
 * @FilePath: /resume/src/components/about/index.vue
 * @Description: 关于
-->
<template>
	<div id="about" class="about width">
		<h2 class="title">关于 我 <span class="title-border"></span></h2>
		<div class="about_me">
			<div class="about_me_image" @mousemove="mouseMove" @mouseleave="mouseLeave">
				<img class="me" src="../../assets/image/about_me.jpg" alt="about_me" />
				<img class="dot" src="../../assets/image/dot.png" alt="dot" />
			</div>
			<div class="about_me_message">
				<ul class="message_container">
					<li class="message_item" v-for="item in aboutList" :key="item.id">
						<span class="label">
							<i :class="item.icon"></i>
							{{ item.label }}
						</span>
						<span class="symbol">:</span>
						<span class="value">{{ item.value }}</span>
					</li>
				</ul>
				<div class="readme">
					<h6 class="readme_title">自我介绍</h6>
					<p class="readme_content">
						有较强的分析、组织和解决问题的能力、有快速学习能力和较高承压能力。能迅速的适应各种环境并融合其中，所受到的教育及锻炼使我能够熟练的管理工作，能独立处理日常中出现的问题，每天都会抽出一定时间来学习新的知识技术和巩固旧知识技术
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import type { About } from '@/utils/type'
const aboutList: Array<About> = reactive([
	{ id: 0, label: '我的电话', value: '17679229796', icon: 'iconfont icon-shouji' },
	{ id: 1, label: '我的生日', value: '2000. 02. 14', icon: 'iconfont icon-liwu' },
	{ id: 2, label: '我的学校', value: '江西应用科技学院', icon: 'iconfont icon-shu' },
	{ id: 3, label: '个人网站', value: 'www.supernew.xyz', icon: 'iconfont icon-ditu_diqiu' },
	{ id: 4, label: '我的兴趣', value: '跑步、跳绳、打游戏', icon: 'iconfont icon-smiling' },
	{ id: 5, label: '我的地址', value: '江西省九江市濂溪区', icon: 'iconfont icon-dizhi' }
])

const mouseMove = (e: MouseEvent) => {
	const { offsetX: x, offsetY: y } = e
	const img = document.querySelector('.me') as HTMLImageElement
	const { offsetWidth: x1, offsetHeight: y1 } = img
	img.style.cssText += 'will-change: transform'
	img.style.cssText += `transform: perspective(300px) rotateX(${(x1 / 2 - x) / 20}deg) rotateY(${
		(y1 / 2 - y) / 20
	}deg) scale3d(1.1, 1.1, 1.1)`
}

const mouseLeave = () => {
	const el = document.querySelector('.me') as HTMLElement
	el.style.transform = 'perspective(300px) rotateX(0deg) rotateY(0deg)'
}
</script>

<style lang="less" scoped>
.about {
	&_me {
		display: flex;
		&_image {
			position: relative;
			max-width: 33.33%;

			&::before {
				content: '';
				position: absolute;
				top: -25px;
				right: -25px;
				bottom: 25px;
				left: 25px;
				border: 1px solid #ff4d41;
				opacity: 0.3;
				border-radius: 5px;
				z-index: -1;
			}

			.me {
				width: 100%;
				height: auto;
				border-radius: 5px;
				border: 1px solid #eee;
			}

			.dot {
				position: absolute;
				bottom: -40px;
				left: -40px;
				opacity: 0.3;
				z-index: -1;
			}
		}
		&_message {
			margin-left: 10%;
			.message_container {
				.message_item {
					display: flex;
					margin-top: 18px;
					color: #232940;
					font-size: 14px;
					font-weight: bold;
					.label {
						width: 25%;
					}
					.symbol {
						color: #9090a0;
						margin-right: 36px;
					}
					.value {
						width: 75%;
						color: #9090a0;
					}
					i {
						font-size: 18px;
						padding-right: 12px;
						color: #ff4d41;
					}
				}
			}
		}

		.readme {
			padding-top: 36px;
			&_title {
				font-weight: bold;
			}
			&_content {
				margin: 12px 0;
				color: #9090a0;
				font-size: 14px;
			}
		}
	}
}
</style>
