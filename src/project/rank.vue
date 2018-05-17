<script>
    // import axios from 'axios';
    import { XHeader, Actionsheet, Tab, TabItem, Card } from 'vux';
	export default{
        components:{
            XHeader,
            Actionsheet,
            Tab, 
            TabItem,
            Card,
        },
        data(){
            return {
                menus : {
                    menu1: '拍照',
                    menu2: '从相册中选择'
                },
                showMenus : false,
                nowIndex: 0,
                rankTop250 : [],
            }
        },
        created(){
            this.getInitData();
        },
        methods:{
            getInitData(){
                var url = this.HOME+"/v2/movie/top250";
                this.$axios.get(url).then(res=>{
                    console.log(res.data);
                    this.rankTop250 = res.data.subjects;
                }).catch(res => {
                    console.log(res);
                });
            },
            onItemClick (index) {
                this.nowIndex = index;
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
        }
    }
</script>
<template>
    <div>
        <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true" style="background-color: #171717;">榜单</x-header>
        <actionsheet :menus="menus" v-model="showMenus" show-cancel @on-click-menu="closeMask" :close-on-clicking-mask="false" :close-on-clicking-menu="false"></actionsheet>
        <tab>
            <tab-item selected @on-item-click="onItemClick">Top250</tab-item>
            <tab-item @on-item-click="onItemClick">正在热映</tab-item>
            <tab-item @on-item-click="onItemClick">即将上映</tab-item>
        </tab>
        <div v-if="nowIndex==0">
            <card v-for="item of rankTop250" :key="item.id" style="width:40%;display:inline-block;">
                <img slot="header" :src="item.images.small" >
                <div slot="content" class="card-padding">
                    <b>{{ item.title }}</b>
                    <p style="color:#999;font-size:12px;">{{item.year}} <span>评分：{{item.rating.average}}</span></p>
                </div>
            </card>
        </div>
        <div v-if="nowIndex==1">
            正在热映
        </div>
        <div v-if="nowIndex==2">
            即将上映
        </div>
    </div>
</template>
<style></style> 