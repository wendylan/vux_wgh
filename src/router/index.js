import Vue from 'vue'
import VueRouter from 'vue-router'

import App from '../App'

import Home from '../components/HelloFromVux.vue'
import Hello from '../components/Hello.vue'
import news from '../components/news.vue'
import show from '../components/show.vue'
import my from '../components/my.vue'
import newsDetail from '../components/news_detail.vue'
import myDetail from '../components/my_detail.vue'

import index from '../project/index.vue'
import rank from '../project/rank.vue'
import search from '../project/search.vue'
import ours from '../project/ours.vue'

Vue.use(VueRouter);

const routes = [{
	path: '/',
	component: App,
	children : [
		{
			path : '/Hello',
            name: 'Hello',
			component : Hello
		},
		{
			path : '/Home',
			component : Home
		},
		{
			path : '/show',
			component : show
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
		},

		{
			path: '/index',
			component: index
		},
		{
			path: '/rank',
			component: rank
		},
		{
			path: '/search',
			component: search
		},
		{
			path: '/ours',
			component: ours
		}
	]
}]

const router = new VueRouter({
	mode: 'history',
    routes: routes
})

export default router;
