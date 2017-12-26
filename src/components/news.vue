<script>
	import { Grid, GridItem, XHeader, Actionsheet } from 'vux';
	export default{
		data(){
			return {
				news : [
					{
						img : '../assets/vux_logo.png',
						title : '重大事件,重大事件fdsfasfeaf中阿巅峰对决拉夫',
						text : '重大事件,重大事件fdsfas',
						time : '2017-06-03',
						parise : 289
					},
					{
						img : '../assets/vux_logo.png',
						title : '重大事件,重大事件fdsfas',
						text : '重大事件,fdaff重大消息啦啦啦啦ssssssssssssss重大消息啦啦啦啦ss',
						time : '2017-06-03',
						parise : 256
					},
					{
						img : '../assets/vux_logo.png',
						title : '重大事件,重大事件fdsfas',
						text : '重大事件fdsfas,重大消息啦啦啦啦',
						time : '2017-06-03',
						parise : 56
					},
					{
						img : '../assets/vux_logo.png',
						title : '重大事件,重大事件fdsfas',
						text : '重大事件fdsfas',
						time : '2017-06-03',
						parise : 86
					},
					{
						img : '../assets/vux_logo.png',
						title : '重大事件,重大事件fdsfas',
						text : '重大事件fdsfas，重大消息啦啦啦啦',
						time : '2017-06-03',
						parise : 27
					},
					{
						img : '../assets/vux_logo.png',
						title : '重大事件,重大事件fdsfas',
						text : '重大事件fdsfas',
						time : '2017-06-04',
						parise : 25
					},
					{
						img : '../assets/vux_logo.png',
						title : '重大事件,重大事件fdsfas',
						text : '重大事件fdsfas',
						time : '2017-06-03',
						parise : 29
					},
				],
				showMenus : false,
				menus: {
					menu1: '拍照',
					menu2: '从相册选择'
				},
			}
		},
		components : {
			Grid,
			GridItem,
			XHeader,
			Actionsheet,
		}
	}
</script>
<template>
<div>
	<x-header :right-options="{showMore: true}" @on-click-more="showMenus = true" style="background-color: #171717;">新闻中心</x-header>
	<grid v-for="(item,index) in news" :key="index">
		<grid-item class="grid">
			<router-link to="/news_detail">
				<img src="../assets/vux_logo.png" alt="">
				<div class="text-top">
					<b>{{ item.text }}</b>
					<p class="grid-span">
						<span>{{ item.time }}</span>
						<span class="parise">赞({{ item.parise }})</span>
					</p>
				</div>
			</router-link>
		</grid-item>
	</grid>
	<actionsheet :menus="menus" v-model="showMenus" show-cancel></actionsheet>
</div>
</template>
<style scoped>
	.grid{
		color: #333;
		padding: 15px;
		width: 100%;
	}
	.grid img{
		display: inline-block;
		width: 20%;
		border: 1px solid #04be02;
		float: left;
	}
	.text-top{
		margin-left: 10px;
		float: left;
		width: 70%;
	}
	.text-top b{
		text-align: left;
		width: 180px;
		display: block;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.grid-span{
		margin-top: 15px;
	}
	.grid-span span{
		display: inline-block;
		float: left;
	}
	.parise{
		margin-left: 90px;
	}
</style>