<!--
* @Author: Zhang Guohua
* @Date:   2020-05-14 10:18:45
* @Last Modified by:   zgh
* @Last Modified time: 2020-05-14 10:19:05
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
			console.log('lazy1 load')

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