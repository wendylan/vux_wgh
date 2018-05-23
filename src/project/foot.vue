<script>
	import { Tabbar, TabbarItem } from 'vux';
	export default{
		components : {
			Tabbar,
			TabbarItem,
		}
	}
</script>
<template>
<div class="foot">
	<tabbar>
		<tabbar-item selected link="/index">
			<x-icon slot="icon" type="home" fill="#35495e"></x-icon>
			<span slot="label">首页</span>
		</tabbar-item>
		<tabbar-item show-dot link="/rank">
			<x-icon slot="icon" type="heart" fill="#35495e"></x-icon>
			<span slot="label">榜单</span>
		</tabbar-item>
		<tabbar-item  link="/search">
			<x-icon slot="icon" type="search" fill="#35495e"></x-icon>
			<span slot="label">搜索</span>
		</tabbar-item>
		<tabbar-item badge="2" link="/ours">
			<x-icon slot="icon" type="information" fill="#35495e"></x-icon>
			<span slot="label">我的</span>
		</tabbar-item>
    </tabbar>
</div>
</template>
<style>
	.foot{
		margin:0 auto;
		position: fixed;
		bottom: 0;
		width: 100%;
	}
</style>
