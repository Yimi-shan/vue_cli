<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  name: 'App',
  mounted () {
      // 设置html的font-size
      document.addEventListener('DOMContentLoaded', function () {
        const ratio = 375 / 10
        const rem = window.innerWidth / ratio
        const dpr = window.devicePixelRatio
        const html = document.querySelector('html')
        html.classList.add(`env__dpr-${dpr}`)
        html.style.fontSize = window.innerWidth / 10 + 'px'
      });
    },
}
</script>

<style>
/*@import "./styles/reset.scss";*/
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
