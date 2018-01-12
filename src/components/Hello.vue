<script>
import { XHeader, Scroller, Swiper, SwiperItem, Actionsheet, Blur, Flexbox, FlexboxItem, LoadingPlugin   } from 'vux';
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
    url: 'http://m.baidu.com',
    img: item.img,
    title: `(可点击)${item.title}`
}))

export default {
    name: 'Hello',
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
        <div style="margin-top: 10px;text-align: center;">
            <b>Blur</b>
            <blur :blur-amount=40 :url="url">
                <p class="center"><img :src="url"></p>
            </blur>
            <flexbox :gutter="0">
                <flexbox-item v-for="(img, index) in images" :key="index"><img :src="img" style="width:100%" @click="url = img"/></flexbox-item>
            </flexbox>
            <swiper auto height="30px" direction="vertical" :interval=2000 class="text-scroll" :show-dots="false">
                <swiper-item><a href="#/news" class="space">义务爱了 完成传奇世界H5-王者归来任务 获得20金</a></swiper-item>
                <swiper-item><a href="#/news" class="space">基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金</a></swiper-item>
                <swiper-item><a href="#/news" class="space">零哥章魚 完成传奇世界H5-王者归来任务 获得30金</a></swiper-item>
                <swiper-item><a href="#/news" class="space">做迎而為 兑换【饿了么】畅享美食红包 消耗20金币<</a></swiper-item>
                <swiper-item><a href="#/news" class="space">只知道不知道 兑换【饿了么】畅享美食红包 消耗20金</a></swiper-item>
                <swiper-item><a href="#/news" class="space">基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金</a></swiper-item>
            </swiper>
        </div>
    </div>
</template>
<style>
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
</style>
