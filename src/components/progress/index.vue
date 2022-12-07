<!--
 * @Author: yy 691335336@qq.com
 * @Date: 2022-12-03 11:18:09
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2022-12-07 15:16:50
 * @FilePath: /resume/src/components/progress/index.vue
 * @Description: 进度条
-->
<template>
	<ul id="skill">
		<li>
			<span class="bar html-css" :style="{ '--color': color, '--proficiency': proficiency + '%' }"></span>
			<h3>{{ languageName }} - {{ proficiency + '%' }}</h3>
		</li>
	</ul>
</template>

<script setup lang="ts">
defineProps({
	languageName: String,
	color: {
		type: String,
		default: '#f0bb4b'
	},
	proficiency: {
		type: [String, Number],
		default: '0'
	}
})
</script>

<style lang="less" scoped>
#skill {
	list-style: none;
	font: 12px 'Helvetica Neue', Arial, Helvetica, Geneva, sans-serif;
	width: 100%;
	position: relative;
	line-height: 2em;
}

#skill li {
	background: #e9e5e2;
	background-image: -webkit-gradient(linear, left top, left bottom, from(#e1ddd9), to(#e9e5e2));
	background-image: -webkit-linear-gradient(top, #e1ddd9, #e9e5e2);
	background-image: -moz-linear-gradient(top, #e1ddd9, #e9e5e2);
	background-image: -ms-linear-gradient(top, #e1ddd9, #e9e5e2);
	background-image: -o-linear-gradient(top, #e1ddd9, #e9e5e2);
	background-image: linear-gradient(top, #e1ddd9, #e9e5e2);
	height: 20px;
	border-radius: 10px;
	-moz-box-shadow: 0 1px 0px #bebbb9 inset, 0 1px 0 #fcfcfc;
	-webkit-box-shadow: 0 1px 0px #bebbb9 inset, 0 1px 0 #fcfcfc;
	box-shadow: 0 1px 0px #bebbb9 inset, 0 1px 0 #fcfcfc;
}

#skill li h3 {
	position: relative;
	top: -25px;
}

.bar {
	height: 18px;
	margin: 1px 2px;
	position: absolute;
	border-radius: 10px;
	-moz-box-shadow: 0 1px 0px #fcfcfc inset, 0 1px 0 #bebbb9;
	-webkit-box-shadow: 0 1px 0px #fcfcfc inset, 0 1px 0 #bebbb9;
	box-shadow: 0 1px 0px #fcfcfc inset, 0 1px 0 #bebbb9;
}

.html-css {
	width: var(--proficiency);
	animation: progress 2s ease-out;
	-moz-animation: progress 2s ease-out;
	-webkit-animation: progress 2s ease-out;
	background-color: var(--color);
}

@-moz-keyframes progress {
	0% {
		width: 0px;
	}
	100% {
		width: var(--proficiency);
	}
}

@-webkit-keyframes progress {
	0% {
		width: 0px;
	}
	100% {
		width: var(--proficiency);
	}
}
</style>
