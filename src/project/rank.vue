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
                inTheaterArr: [],
                soonData: [],
            }
        },
        created(){
            this.getInitData();
            this.getTheater();
            this.getSoonData();
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
            getTheater(){
                var url = this.HOME+"/v2/movie/in_theaters";
                this.$axios.get(url).then(res => {
                    console.log(res);
                    this.inTheaterArr = res.data.subjects;
                }).catch(res => {
                    console.log(res);
                });
            },
            getSoonData(){
                var url = this.HOME+"/v2/movie/coming_soon";
                this.$axios.get(url).then(res => {
                    console.log(res);
                    this.soonData = res.data.subjects;
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
        <div v-if="nowIndex==0" style="text-align:center;">
            <card v-for="item of rankTop250" :key="item.id" style="width:45%;display:inline-block;text-align:center;margin-right:5px;margin-left:8px;">
                <img slot="header" :src="item.images.small" style="width:100%;display:inline-block;">
                <div slot="content" class="card-padding">
                    <b>{{ item.title }}</b>
                    <p style="color:#999;font-size:12px;">{{item.year}} <span>评分：{{item.rating.average}}</span></p>
                </div>
            </card>
        </div>
        <div v-if="nowIndex==1" style="text-align:center;">
            <card v-for="item of inTheaterArr" :key="item.id" style="width:45%;display:inline-block;text-align:center;margin-right:5px;margin-left:8px;">
                <img slot="header" :src="item.images.small" style="width:100%;display:inline-block;">
                <div slot="content" class="card-padding">
                    <b>{{ item.title }}</b>
                    <p style="color:#999;font-size:12px;">{{item.year}} <span>评分：{{item.rating.average}}</span></p>
                </div>
            </card>
        </div>
        <div v-if="nowIndex==2" style="text-align:center;">
            <card v-for="item of soonData" :key="item.id" style="width:45%;display:inline-block;text-align:center;margin-right:5px;margin-left:8px;">
                <img slot="header" :src="item.images.small" style="width:100%;display:inline-block;">
                <div slot="content" class="card-padding">
                    <b>{{ item.title }}</b>
                    <p style="color:#999;font-size:12px;">{{item.year}} <span>评分：{{item.rating.average}}</span></p>
                </div>
            </card>
        </div>
    </div>
</template>
<style></style> 