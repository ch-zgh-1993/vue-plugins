<!--
* @Author: Zhang Guohua
* @Date:   2020-04-29 10:41:11
* @Last Modified by:   zgh
* @Last Modified time: 2020-04-29 15:33:30
* @Description: create by zgh
* @GitHub: Savour Humor
-->
<!-- need load lazy -->
<template>
	<div class="wrapper">
		{{ text || obj.test }}
	</div>
</template>

<script type="text/javascript">
	export default {
		props: {
			obj: Object
		},
		data () {
			return {
				text: ''
			}
		},
		created () {
			console.log('lazy load')

			// 延迟加载
			setTimeout(() => {
				this.text = '我是需要延迟加载的内容'
			}, 3000)
		}
	}
</script>

<style>
	.wrapper {
		width: 100%;
		height: 500px;
		background: #ccc;
		color: #FFFFFF;
	}
</style>
