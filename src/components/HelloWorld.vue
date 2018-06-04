<template>
  <div class="wrap">
  	<button class="btn" @click="showToast">show toast</button>
  </div>
</template>

<script>
	import {home} from '@/api';//引入
	
	export default {
  data () {
    return {
      
    }
  },
   mounted () {
	  const self = this;
	  home().then(r => {//调用接口
	  	let res = r.data;
	  	console.log(res);
	  });
	},
	methods: {
		showToast () {
		  this.$toast('toast')
		}
	}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
	@import '../styles/reset.scss';
	.wrap{
		color: $bg_color;
	}
	.btn{
		font-size: $size_small;
		padding: rem(10) rem(20);
		color: white;
		background: $bg_color;
		border-radius: rem(5);
	}
</style>
