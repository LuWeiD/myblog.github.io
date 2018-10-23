// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'


//引入vue中的内置的路由依赖模块，，使用相关的标签和属性以及方法。例如:已提供文件路由的vue.use使用创建的路由文件方法
import VueRouter from 'vue-router'
//引入定义的路由文件，命名为Routes,以提供后期的使用
import Routes from './routes'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueRouter)//使用路由方法

Vue.directive('rainbow',{
	bind(el,binding,vnode){
		el.style.color = "#"+Math.random().toString().slice(2, 8);
	}
})
Vue.directive('theme',{
	bind(el,binding,vnode){
		if (binding.value=="wide") {
			el.style.width="800px"
		}
	}
})
// Vue.filter("filterA",function(value){
// 	return value.toUpperCase();
// })
//创建路由
const routers = new VueRouter({
	routes:Routes,//这里的routes为属性，
	mode:"history"
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },//这里定义的是局部组件，也就是说这里app.vue组件模板只能在“index.html”文件中使用，而不能在其他.html
  //文件中使用,如果要定义去全局组件则使用Vue.component('',<>)
  template: '<App/>',
  router:routers
})
