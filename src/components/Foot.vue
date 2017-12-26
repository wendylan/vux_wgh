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
		<tabbar-item link="/home">
			<x-icon slot="icon" type="home" fill="#35495e"></x-icon>
			<span slot="label">首页</span>
		</tabbar-item>
		<tabbar-item show-dot link="/show">
			<x-icon slot="icon" type="heart" fill="#35495e"></x-icon>
			<span slot="label">信息</span>
		</tabbar-item>
		<tabbar-item selected link="/search">
			<x-icon slot="icon" type="search" fill="#35495e"></x-icon>
			<span slot="label">查询</span>
		</tabbar-item>
		<tabbar-item badge="2" link="/my">
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
