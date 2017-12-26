<script>
	import { XHeader, Actionsheet, Grid, GridItem } from 'vux';
	export default{
		data(){
			return {
				showMenus : false,
				menus: {
					menu1: '拍照',
					menu2: '从相册选择'
				},
			}
		},
		components : {
			XHeader,
			Actionsheet,
			Grid,
			GridItem,
		}
	}
</script>
<template>
	<div>
		<x-header :right-options="{showMore: true}" @on-click-more="showMenus = true" style="background-color: #171717;">新闻详细</x-header>
		<grid>
			<grid-item class="grid">
				<p>
					<b>哈哈哈哈哈哈哈</b>
				</p>
				<img src="../assets/1.png" alt="">
				<div class="text-top">
					<p class="text_align text_ident">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur reiciendis atque odit sit accusantium ullam dolor sunt sequi modi adipisci delectus, illo fugit placeat beatae, pariatur itaque aliquam similique, fuga.
					</p>
					<p class="text_align">
						<span class="grid-span">2017-06-09
							<span class="parise">赞(256)</span>
						</span>
					</p>
				</div>
			</grid-item>
		</grid>
		<actionsheet :menus="menus" v-model="showMenus" show-cancel></actionsheet>
	</div>
</template>
<style>
	.text_align{
		text-align: left;
	}
	.text_ident{
		text-indent: 2em;
	}
	.grid{
		color: #333;
		padding: 15px;
		width: 100%;
		text-align: center;
	}
	.grid img{
		display: block;
		width: 100%;
	}
	.text-top{
		margin-top: 10px;
		width: 100%;
	}
	.grid-span{
		color: #999;
		width: 100%;
		display: block;
		margin-top: 10px;
		font-size: 14px;
	}
	.parise{
		float: right;
		display: inline-block;
	}
</style>