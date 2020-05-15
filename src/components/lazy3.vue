<!--
* @Author: Zhang Guohua
* @Date:   2020-05-15 14:11:15
* @Last Modified by:   zgh
* @Last Modified time: 2020-05-15 14:11:20
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
			console.log('lazy3 load')

			// 延迟加载
			setTimeout(() => {
				this.text = '我是需要延迟加载的内容 lazy3.vue'
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