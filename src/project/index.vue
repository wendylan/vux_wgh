<script>
    import { XHeader, Actionsheet, Swiper } from 'vux';
	export default{
        components: {
            XHeader, 
            Actionsheet,
            Swiper,
        },
        data(){
            return{
                menus : {
                    menu1: '拍照',
                    menu2: '从相册中选择'
                },
                showMenus : false,
                img_list: [{
                    url: 'javascript:',
                    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
                    title: '送你一朵fua'
                }, {
                    url: 'javascript:',
                    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
                    title: '送你一辆车'
                }, {
                    url: 'javascript:',
                    img: 'https://static.vux.li/demo/1.jpg', // 404
                    title: '送你一次旅行',
                    fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
                }]
            }
        },
        methods: {
            closeMask () {
                this.$vux.loading.show({
                    text: '进行中'
                })
                setTimeout(() => {
                    this.$vux.loading.hide()
                    this.showMenus = false
                }, 1000);
            },
        }
    }
</script>
<template>
    <div>
        <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true" style="background-color: #171717;">首页</x-header>
        <actionsheet :menus="menus" v-model="showMenus" show-cancel @on-click-menu="closeMask" :close-on-clicking-mask="false" :close-on-clicking-menu="false"></actionsheet>
        <swiper :list="img_list" auto style="width:100%;margin:0 auto;" height="180px" dots-class="custom-bottom" dots-position="center"></swiper>
    </div>
</template>
<style></style>