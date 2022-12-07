<!--
 * @Author: yy 691335336@qq.com
 * @Date: 2022-12-03 14:07:23
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2022-12-07 16:15:16
 * @FilePath: /resume/src/view/copyright/index.vue
 * @Description: 版权
-->
<template>
	<div class="copyright">
		<div class="content width">
			<p class="text-muted mb-0">2022 © 徐杨杨</p>
			<p class="text-muted mb-0">
				<i class="iconfont icon-buganxingqu"></i>
				由徐杨杨创建
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
</script>

<style lang="less" scoped>
.copyright {
	padding: 12px 0;
	.content {
		display: flex;
		justify-content: space-between;
		p {
			margin: 0;
			color: #9090a0;
			font-size: 14px;
		}
		i {
			color: #ff4d41;
		}
	}
}
</style>
