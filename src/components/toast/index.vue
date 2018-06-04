<template>
    <div v-if="showToast" class="toast" >
      <p>{{ toastTitle }}</p>
    </div>
</template>

<script>
export default {
  data: () => ({
  	showToast: false,
    toastTitle: '',
  }),
  
  methods: {
	show (params) {
	    this.toastTitle = params;
	    this.showToast = true
    },

  },
  watch: {
    toastTitle: function(val) {
        if (val) {
          this.showToast = true;
          setTimeout(() => {
            this.showToast = false;
            this.toastTitle='';
          }, 2000)
        }
        return val;
      }
  }
}
</script>

<style scoped lang='scss'>
@import '../../styles/mixin.scss';
	
.toast {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(49, 49, 49, 0.8);
  color: #fff;
  border-radius: rem(5);
  z-index: 999;
  text-align: center;
  font-size: rem(14);
  p{
  	margin: 0;
  	padding: rem(4) rem(10);
  	
  }
}

</style>

