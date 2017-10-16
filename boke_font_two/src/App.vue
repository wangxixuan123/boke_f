<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  created(){
    this.$store.axios=this.axios
  }
}
</script>

<style>
*{
  margin:0;
  padding:0px;
}
html,body{
  width:100%;
  height:100%;
}
body{
  /*font-family: Alegreya, serif;*/
  font-family: YouYuan,serif;
/*  background:url('img/timg1.gif') no-repeat;
  background-size:100% 100%;*/
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height:100%;
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
</style>
