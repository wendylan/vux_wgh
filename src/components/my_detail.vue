<script>
	import { XHeader, Group, Cell, Grid, GridItem } from 'vux';
	export default{
		components : {
			XHeader,
			Group,
			Cell,
			Grid,
			GridItem,
		},
		data(){
			return{
				msg : 'this is a test',
			}
		},
		created(){
			// var url = this.HOME+"/v2/movie/in_theaters";
			var url = this.HOME+"/v2/movie/new_movies";
			this.$axios.get(url).then(res=>{
				console.log(res.data);
			}).catch(error=>{
				console.log(1111111111);
				console.log(error);
			});
		}
	}
</script>
<template>
	<div>
		<x-header style="background-color: #171717;">个人中心</x-header>
		<div class="contain">
			<grid class="center_person">
				<grid-item>
					<div class="left">tesa</div>
				</grid-item>
				<grid-item>
					<div class="left">tesa</div>
				</grid-item>
			</grid>
		</div>
	</div>
</template>
<style scoped>
	.contain{
		margin-top: 10px;
	}
	.contain .weui-cells::before, .contain .weui-cell::before, .contain .weui-grids::before{
		border-top: none;
	}
	.center_person{
		background-color: #fff;
	}
</style>