<!--
* @Author: Zhang Guohua
* @Date:   2020-04-29 10:17:46
* @Last Modified by:   zgh
* @Last Modified time: 2020-05-14 20:45:07
* @Description: create by zgh
* @GitHub: Savour Humor
-->
<template>
	<div>
		<div 
			v-for="(item, index) in slotArr"
			:key="index"
			:ref="item.name">
			<slot 
				v-slot:[item.name]
				v-if="item.showBlock !== null ? item.showBlock : item.show">
			</slot>
		</div>
	</div>
</template>

<script type="text/javascript">

export default {
	name: 'scroll-load',
	props: {
		showBlock: {
			type: Boolean,
			default: null
		},
		bottom: {
			type: Number,
			default: null
		},
		slotProps: {
			type: Array,
			default () {
				return []
			}
		}
	},
	data () {
		return {
			ticking: false,
			viewPortHeight: null,
			slotArr: []
		}
	},
	created () {
		this.slotArr = this.slotProps.length > 0 ? this.formatSlotProps() : [{
			name: 'default',
			bottom: this.bottom || 100,
			showBlock: this.showBlock === null ? null : this.showBlock,
			show: false
		}]
	},
	mounted () {
		this.addListener()
	},
	watch: {
		showBlock (val) {
			this.slotProps.length == 0 && (this.slotArr[0].showBlock = !!val)
		}
	},
	methods: {
		formatSlotProps () {
			const slotProps = this.slotProps
			slotProps.every(val => val.name !== 'default') && slotProps.push({
				name: 'default',
				bottom: 100,
				showBlock: null,
				show: false
			})
			return slotProps.map(val => {
				if (typeof val !== 'string' && Object.prototype.toString.call(val) !== '[object Object]') throw new Error('slotProps must be Array<string | object>')
				const base = {
					showBlock: null,
					show: false,
					bottom: 100
				}
				return typeof val === 'string' ? {
					...base,
					name: val
				} : {
					...base,
					...val
				}
			})
		},
		judgeShow (val) {
			return val.showBlock !== null ? val.showBlock : val.show
		},
		addListener () {
			document.addEventListener('scroll', this.watchScroll, false)
		},
		watchScroll (){
			const vm = this
			if (!vm.ticking && !vm.slotArr.every(val => vm.judgeShow(val))) {
			    window.requestAnimationFrame(function() {
			    	vm.slotArr.forEach(val => {
			    		if(vm.judgeShow(val)) return
			    		const offsetTop = val.name === 'default' ? (vm.$refs[val.name] && vm.$refs[val.name][0].offsetTop) : vm.$refs[val.name].offsetTop
				    	const scrollTop = document.documentElement.scrollTop
				    	!vm.viewPortHeight && (vm.viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight)

				    	if (offsetTop - scrollTop < vm.viewPortHeight + val.bottom) {
				    		val.show = true
				    		vm.$emit('load', val.name)
				    	}
			    	})
			      	vm.ticking = false
			    })
			}
		  	vm.ticking = true;
		}
	},
	destoryed () {
		document.removeEventListener('scroll', this.watchScroll, false)
	}
}

</script>

<style>
	
</style>