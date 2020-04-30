/*
* @Author: Zhang Guohua
* @Date:   2020-04-29 16:03:51
* @Last Modified by:   zgh
* @Last Modified time: 2020-04-30 16:49:59
* @Description: create by zgh
* @GitHub: Savour Humor
*/

# scroll-load


首屏内容过多时，对首屏暂时不出现在用户视野中的模块，进行延迟加载，从而减少首次渲染的内容，提高复杂情况下首屏渲染的速度。减少用户等待，降低接口压力。


## how to use
// 安装
```
npm install vue-scroll-render

yarn add vue-scroll-render
```

```js
// main.js 中引入 
import scrollLoad from 'vue-scroll-render'
Vue.use(scrollLoad)
```

```html

<!-- 组件中使用 -->
<scroll-load>
  <!-- 需要延迟加载的模块 -->
  <lazy></lazy>
</scroll-load>
```


