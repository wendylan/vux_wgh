<script>
    import { XHeader, Actionsheet, Search, Toast } from 'vux';
	export default{
        components:{
            XHeader,
            Actionsheet,
            Search,
            Toast,
        },
        data(){
            return {
                menus : {
                    menu1: '拍照',
                    menu2: '从相册中选择'
                },
                showMenus : false,
                results: [],
                keyword: ''
            }
        },
        methods:{
            closeMask () {
                this.$vux.loading.show({
                    text: '进行中'
                })
                setTimeout(() => {
                    this.$vux.loading.hide()
                    this.showMenus = false
                }, 1000);
            },
            // setFocus () {
            //     this.$refs.search.setFocus()
            // },
            // resultClick (item) {
            //     window.alert('you click the result item: ' + JSON.stringify(item))
            // },
            getResult (val) {
                console.log('on-change', val)
                this.results = val ? getResult(this.keyword) : []
            },
            onSubmit () {
                console.log(this.$vux);
                this.$refs.search.setBlur()
                this.$vux.toast.show({
                    type: 'text',
                    position: 'top',
                    text: 'on submit'
                })
                
            },
            onFocus () {
                console.log('on focus')
            },
            onCancel () {
                console.log('on cancel')
            }
        },
    }
    function getResult (val) {
        let rs = []
        for (let i = 0; i < 20; i++) {
            rs.push({
                title: `${val} result: ${i + 1} `,
                other: i
            })
        }
        return rs
    }
</script>
<template>
    <div>
        <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true" style="background-color: #171717;">查询</x-header>
        <actionsheet :menus="menus" v-model="showMenus" show-cancel @on-click-menu="closeMask" :close-on-clicking-mask="false" :close-on-clicking-menu="false"></actionsheet>
        <div>
            <search
                @on-change="getResult"
                :results="results"
                v-model="keyword"
                placeholder="输入电影名称"
                position="absolute"
                auto-scroll-to-top
                top="46px"
                @on-submit="onSubmit"
                ref="search">
            </search>
        </div>
    </div>
</template>
<style scoped>

</style>