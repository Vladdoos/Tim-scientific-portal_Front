<template>
<!--  <img alt="Vue logo" src="https://www.timacad.ru/uploads/media/cache/image_sm_resize/uploads/images/20171115/1510754611_emblema.jpg">-->
<!--  <HelloWorld></HelloWorld>-->
  <page-main/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import PageMain from "./components/routComponents/page-main";
export default {
  name: 'App',
  components: {
    PageMain
    // HelloWorld
  }
}
</script>

<style>
  @import './static/css/mainPage.css';
  @import './static/css/style.css';
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/

/*img {*/
/*  width: 200px;*/
/*}*/
</style>
