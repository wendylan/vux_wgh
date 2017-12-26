// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
// import VueResource from 'vue-resource'

import App from './App'
import Home from './components/HelloFromVux.vue'
import Hello from './components/Hello.vue'
import Search from './components/Search.vue'
import news from './components/news.vue'
import my from './components/my.vue'
import newsDetail from './components/news_detail.vue'
import myDetail from './components/my_detail.vue'

Vue.use(VueRouter);
// Vue.use(VueResource);

const routes = [{
	path: '/',
	component: App,
	children : [
		{
			path : '/Hello',
			component : Hello
		},
		{
			path : '/Home',
			component : Home
		},
		{
			path : '/show',
			component : news
		},
		{
			path : '/search',
			component : Search
		},
		{
			path : '/my',
			component : my
		},
		{
			path : '/news',
			component : news
		},
		{
			path : '/news_detail',
			component : newsDetail
		},
		{
			path : '/my_detail',
			component : myDetail
		}
	]
}]

const router = new VueRouter({
	routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	router,
	render: h => h(App)
}).$mount('#app-box')
