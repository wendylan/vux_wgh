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
			return{}
		},
	}
</script>
<template>
	<div>
		<div class="vux_demo">
			<x-header style="background-color: #171717;">个人中心</x-header>
		</div>
		<div class="contain">
			<!-- 左中右中间两行结构 -->
            <grid class="left_to_right">
                <grid-item>
                    <router-link to="/my_detail">           
                        <p class="left_p">
                            <img src="https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg" alt="">
                        </p>
                        <div class="inline_div">
                            <h3>Lacey</h3>
                            <p>微信号: lxy13823427249</p>
                        </div>
                        <span>
                        	<img src="https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg" alt="">
                        </span>
                    </router-link>
                </grid-item>
            </grid>

            <div style="clear: both;">
				<group>
					<x-icon type="waterdrop" size="25" class="left_width" fill="#FCD80D"></x-icon>
					<cell title="钱包" is-link></cell>
				</group>
				<group>
					<x-icon type="android-star" size="25" class="left_width" fill="#FCD80D"></x-icon>
					<cell title="收藏" is-link></cell>
					<x-icon type="android-image" size="25" class="left_width" fill="#204265"></x-icon>
					<cell title="相册" is-link></cell>
					<x-icon type="android-cart" size="25" class="left_width" fill="#FCD80D"></x-icon>
					<cell title="卡包" is-link></cell>
					<x-icon type="android-favorite" size="25" class="left_width" fill="#204265"></x-icon>
					<cell title="表情" is-link></cell>
				</group>
				<group>
					<x-icon type="android-settings" size="25" class="left_width" fill="#204265"></x-icon>
					<cell title="设置" is-link></cell>
				</group>
            </div>
		</div>
	</div>
</template>
<style>
	.vux_demo {
	  text-align: center;
	  color: #fff;
      width: 100%;
      z-index: 2;
	}
	.contain{
		margin-top: 10px;
	}
    .left_to_right{
    	clear: both;
    	width: 100%;
        background-color: #fff;
    }
    .left_p {
        width: 19%;
        float: left;
    }
    .left_p img{
        display: inline-block;
        width: 100%;
    }
    .left_to_right span{
        width: 19%;
        float: left;
        text-align: right;
    }
    .left_to_right span img{
        width: 50%;
        height: 50%;
        line-height: 50%;
        margin-right: 5px;
    }
    .inline_div{
        float: left;
        width: 60%;
        margin-top: -5px;
        margin-left: 5px;
        vertical-align: top;
    }
    .inline_div p{
        margin-top: 5px;
        overflow: hidden;/*超出部分隐藏*/
        white-space: nowrap;/*不换行*/
	}
	.contain .weui-cells::before, .contain .weui-cell::before, .contain .weui-grids::before{
		border-top: none;
	}
	.left_width{
		float:left;
		margin-top:5px;
	}
</style>