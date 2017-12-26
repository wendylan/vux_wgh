<script>
import { XHeader, Scroller, Swiper, SwiperItem, Actionsheet, Blur, Flexbox, FlexboxItem, LoadingPlugin, Grid, GridItem  } from 'vux';
import Vue from 'vue';
Vue.use(LoadingPlugin);

const baseList = [
    {
        url: 'javascript:',
        img: 'https://static.vux.li/demo/1.jpg',
        title: '送你一朵花'
    }, 
    {
        url: 'javascript:',
        img: 'https://static.vux.li/demo/2.jpg',
        title: '送你一辆车'
    }, 
    {
        url: 'javascript:',
        img: 'https://static.vux.li/demo/3.jpg',
        title: '送你一次旅行'
    }
];

const urlList = baseList.map((item, index) => ({
    url: '/news',
    img: item.img,
    title: `(可点击)${item.title}`
}))

export default {
    data () {
        return {
            index : 0,
            list : urlList,
            showMore : false,
            menus : {
                menu1: '拍照',
                menu2: '从相册中选择'
            },
            showMenus : false,
            images: [
                'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',
                'https://o3e85j0cv.qnssl.com/waterway-107810__340.jpg',
                'https://o3e85j0cv.qnssl.com/hot-chocolate-1068703__340.jpg'
            ],
            url: 'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',
        }
    },
    components: {
        XHeader,
        Scroller,
        Swiper,
        SwiperItem,
        Actionsheet,
        Blur,
        Flexbox,
        FlexboxItem,
        Grid,
        GridItem, 
      
    },
    methods: {
        onIndexChange (index) {
          this.index = index
        },
        closeMask () {
            this.$vux.loading.show({
                text: '进行中'
            })
            setTimeout(() => {
                this.$vux.loading.hide()
                this.showMenus = false
            }, 1000);
        },
    },
}
</script>

<template>
    <div>
        <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true" style="background-color: #171717;">首页</x-header>
        <actionsheet :menus="menus" v-model="showMenus" show-cancel @on-click-menu="closeMask" :close-on-clicking-mask="false" :close-on-clicking-menu="false"></actionsheet>
        <swiper loop auto :list="list" :index="index" @on-index-change="onIndexChange" dots-class="custom-bottom" ></swiper>

        <div class="main_box">
            <div style="background-color: #fff;">
                <grid>
                    <grid-item label="test">
                        <x-icon slot="icon" type="android-bar" fill="#409eff"></x-icon>
                        <span slot="label">好酒</span>
                    </grid-item>
                    <grid-item label="test">
                        <x-icon slot="icon" type="android-boat" fill="#35495e"></x-icon>
                        <span slot="label">火车票</span>
                    </grid-item>
                    <grid-item label="test">
                        <x-icon slot="icon" type="android-bus" fill="#ED4920"></x-icon>
                        <span slot="label">汽车票</span>
                    </grid-item>
                    <grid-item label="test">
                        <x-icon slot="icon" type="android-camera" fill="#14E397"></x-icon>
                        <span slot="label">相册</span>
                    </grid-item>
                </grid>
                <grid>
                    <grid-item label="test">
                        <x-icon slot="icon" type="android-bar" fill="#409eff"></x-icon>
                        <span slot="label">好酒</span>
                    </grid-item>
                    <grid-item label="test">
                        <x-icon slot="icon" type="android-boat" fill="#35495e"></x-icon>
                        <span slot="label">火车票</span>
                    </grid-item>
                    <grid-item label="test">
                        <x-icon slot="icon" type="android-bus" fill="#ED4920"></x-icon>
                        <span slot="label">汽车票</span>
                    </grid-item>
                    <grid-item label="test">
                        <x-icon slot="icon" type="android-camera" fill="#14E397"></x-icon>
                        <span slot="label">相册</span>
                    </grid-item>
                </grid>
            </div>
            <!-- /*上下结构三张图*/ -->
            <grid class="grid_box">
                <grid-item>
                    <router-link to="/news">
                        <img :src="val" alt="" v-for="val in images">
                        <p>Lorem ipsum dolor sit amet, illo tenetur laboriosam blanditiis quisquam saepe accusamus nulla doloribus. Incidunt, consectetur?</p>
                    </router-link>
                </grid-item>
            </grid>
            <grid class="grid_box">
                <grid-item>
                    <router-link to="/news">
                        <p>Lorem ipsum dolor sit amet,  quas, soluta! Voluptates quasi expedita cumque.</p>
                        <img :src="val" alt="" v-for="val in images">
                    </router-link>
                </grid-item>
            </grid>
            <!-- /*上下结构一张图*/ -->
            <grid class="grid_bigbox">
                <grid-item>
                    <router-link to="/news">
                        <img src="https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg" alt="">
                        <p>Lorem ipsum dolor sit amet,  quaerat magni. Tempore voluptatibus delectus fuga explicabo harum nemo excepturi inventore voluptas illum!</p>
                    </router-link>
                </grid-item>
            </grid>
            <grid class="grid_bigbox">
                <grid-item>
                    <router-link to="/news">
                        <p>Lorem ipsum dolor sit amet, Doloremque consectetur delectus, magnam aliquam, nihil quas asperiores iusto saepe.</p>
                        <img src="https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg" alt="">
                    </router-link>
                </grid-item>
            </grid>
            <!-- 左右一张结构 -->
            <grid class="grid_left">
                <grid-item class="left_box">
                    <router-link to="/news">
                        <p>Lorem ipsum dolor sit amet, tenetur odio numquam, laudantium esse </p>
                    </router-link>
                </grid-item>
                <grid-item class="right_box">
                    <router-link to="/news">
                        <img src="https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg" alt="">
                    </router-link>
                </grid-item>
            </grid>
            <grid class="grid_left">
                <grid-item class="right_box">
                    <router-link to="/news">
                        <img src="https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg" alt="">
                    </router-link>
                </grid-item>
                <grid-item class="left_box">
                    <router-link to="/news">
                        <p>Lorem ipsum dolor sit amet, libero in maiores provident sed quos obcandae.</p>
                    </router-link>
                </grid-item>
            </grid>
            <!-- 左右两张结构 -->
            <grid class="grid_bigleft">
                <grid-item class="big_left">
                    <router-link to="/news">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. dreiciendis doloribus id.</p>
                        <img src="https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg" alt="">
                    </router-link>
                </grid-item>
                <grid-item class="big_left">
                    <router-link to="/news">
                        <p>Lorem ipsum dolor sit amet, libero in maiores provident sed quos repudiandae.</p>
                        <img src="https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg" alt="">
                    </router-link>
                </grid-item>
            </grid>
            <!-- 左中右中间两行结构 -->
            <grid class="left_to_right">
                <grid-item>
                    <router-link to="/news">           
                        <p class="left_p">
                            <img src="https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg" alt="">
                        </p>
                        <div class="inline_div">
                            <h3>LaceyLaceyLacey</h3>
                            <p>吃饭啦吗？吃饭啦吗？吃饭啦吗？吃饭啦吗？</p>
                        </div>
                        <span>09:12</span>
                    </router-link>
                </grid-item>
            </grid>
             <!-- 左中右中间一行结构 -->
            <grid class="left_center_right">
                <grid-item>
                    <router-link to="/news">           
                        <p class="left_img">
                            <img src="https://o3e85j0cv.qnssl.com/waterway-107810__340.jpg" alt="">
                        </p>
                        <div class="center_box">
                            <b>朋友圈</b>
                        </div>
                        <div class="right_img">
                            <img src="https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg" alt="">
                        </div>
                    </router-link>
                </grid-item>
            </grid>
            <!-- 左右2：1比例 -->
            <grid class="percent">
                <grid-item >
                    <p class="percent_left"> rerum blanditiis quaerat et amet vel sunt maiores, architecto quasi illo iustos.</p>
                    <p class="percent_right">
                        <img src="https://o3e85j0cv.qnssl.com/waterway-107810__340.jpg" alt="">
                    </p>
                </grid-item>
            </grid>
            <!-- 左右1：2比例 -->
            <grid class="normal">
                <grid-item >
                    <p class="normal_left">
                        <img src="https://o3e85j0cv.qnssl.com/waterway-107810__340.jpg" alt="">
                    </p>
                    <p class="normal_right"> rerum blanditiis quaerat et amet vel sunt maiores, architecto quasi illo iustos.</p>
                </grid-item>
            </grid>
        </div>
    </div>
</template>
<style>
    *{
        font-family: '微软雅黑';
        font-size: 12px;
    }
    .main_box{
        margin-top: 10px;
        text-align: center;
    }
    .main_box .weui-grids::before{
        border-top: none;
    }
    .space{
        overflow: hidden;
        white-space: nowrap;
        text-overflow:ellipsis;
        font-size: 14px;
    }
    .center {
        text-align: center;
        padding-top: 20px;
        color: #fff;
        font-size: 18px;
    }
    .center img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 4px solid #ececec;
    }

    /*上下结构三张图*/
    .grid_box .weui-grid{
        margin-top: 10px;
        background-color: #fff;
        padding: 5px;
    }
    .grid_box p{
        text-align: left;
        font-size: 14px;
        margin-left: 1%;
    }
    .grid_box img{
        display: inline-block;
        width: 31%;
        margin: 1%;
    }
    /*上下结构一张图*/
    .grid_bigbox .weui-grid{
        margin-top: 10px;
        background-color: #fff;
        padding: 5px;
    }
    .grid_bigbox p{
        text-align: left;
        font-size: 14px;
        margin-left: 1%;
    }
    .grid_bigbox img{
        width: 98%;
        margin: 1%;
    }
    
    /*左右一张结构*/
    .grid_left {
        margin-top: 10px;
        background-color: #fff;
        text-align: left;
    }
    .left_box{
        float: left;
        width: 66%;
    }
    .left_box p{
        font-size: 14px;
    }
    .right_box{
        width: 30%;
        float: left;
    }
    .right_box img{
        display: inline-block;
        width: 100%;
    }
    /*左右两张结构*/
    .grid_bigleft{
        margin-top: 10px;
        background-color: #fff;
    }
    .big_left{
        float: left;
    }
    .big_left p{
        width: 66%;
        float: left;
        font-size: 14px;
        overflow: hidden;/*超出部分隐藏*/
        white-space: nowrap;/*不换行*/
        text-overflow:ellipsis;/*超出部分文字以...显示*/
    }
    .big_left img{
        width: 30%;
        margin: 1%;
    }
    /*左中右中间两行结构*/
    .left_to_right{
         margin-top: 10px;
        text-align: left;
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
    .left_to_right span {
        width: 19%;
        float: left;
        text-align: right;
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
        text-overflow:ellipsis;/*超出部分文字以...显示*/
    }
    /*左中右中间一行结构*/
    .left_center_right{
        margin-top: 10px;
        text-align: left;
        background-color: #fff;
    }
    .left_img{
        width: 19%;
        float: left;
    }
    .left_img img{
        display: inline-block;
        width: 80%;
        height: 30px;
        line-height: 30px;
    }
    .center_box{
        float: left;
        width: 60%;
    }
    .center_box b{
        margin-left: 5px;
        font-size: 16px;
    }
    .right_img{
        width: 19%;
        float: left;
    }
    .right_img img{
        display: inline-block;
        width: 80%;
        height: 30px;
        line-height: 30px;
    }
    /*<!-- 左右2：1比例 -->*/
    .percent{
        margin-top: 10px;
        background-color: #fff;
        text-align: left;
    }
    .percent_left{
        width: 60%;
        float: left;
    }
    .percent_right{
        width: 30%;
        float: right;
    }
    .percent_right img{
        display: inline-block;
        width: 100%;
    }
    /*<!-- 左右1：2比例 -->*/
    .normal{
        margin-top: 10px;
        background-color: #fff;
        text-align: left;
    }
    .normal_left{
        width: 30%;
        float: left;
    }
    .normal_left img{
        display: inline-block;
        width: 100%;
    }
    .normal_right{
        width: 60%;
        float: right;
    }
</style>
