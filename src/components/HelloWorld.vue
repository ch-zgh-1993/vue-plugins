<!--
* @Author: Zhang Guohua
* @Date:   2020-04-28 19:57:00
* @Last Modified by:   zgh
* @Last Modified time: 2020-05-14 20:46:46
* @Description: create by zgh
* @GitHub: Savour Humor
-->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul
      v-for="key in new Array(10)">
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>

    <scroll-load
      :showBlock="showBlock"
      :slotProps="slotProps"
      @load="lazyLoad"
    > 
      <lazy :obj="obj"></lazy>
      <!-- <template v-slot:head1>
        <lazy :obj="obj"></lazy>
      </template>
      
      <template v-slot:head1>
        <lazy1 :obj="obj"></lazy1>
      </template>
      <template v-slot:head1>
        <lazy1 :obj="obj"></lazy1>
      </template> -->
    </scroll-load>

    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
// 引入插件
import scrollLoad from '../plugins/scroll-load.vue'

export default {
  name: 'HelloWorld',
  components: {
    lazy: () => import('./lazy.vue' /* webpackChunkName: 'lazy' */),
    lazy1: () => import('./lazy1.vue' /* webpackChunkName: 'lazy1' */),
    scrollLoad
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      obj: {
        test: 'i am test message'
      },
      showBlock: false,
      showLazyLoad: false,
      slotProps: ['head', 'head1']
    }
  },
  created () {
    setTimeout(() => {
      this.showBlock = true
    }, 5000)
  },
  methods: {
    lazyLoad (name) {
      this.showLazyLoad = true
      console.log(`emit load event, my slot name is ${name}`)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
