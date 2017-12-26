<script>
	import foot from './components/Foot.vue';
	export default {
		data() {
			return {
				name : 'app',
			}
		},
		components : {
			foot,
		}
	}
</script>

<template>
  <div id="app">
    <router-view></router-view>
    <foot></foot>
  </div>
</template>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
#app{
	margin-bottom: 80px;
}
</style>
