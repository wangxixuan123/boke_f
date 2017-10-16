<template>
  <div class="index">
   <div class="head">
      <div class="left"><img src="../img/head.jpg" alt=""><h1>麒.萱萱</h1></div>
    </div>
    <navs :datas="navData"></navs>
    <div class="cont">
      <boke :bokedata="articalData"></boke>
      <asides></asides>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import navs from './Nav'
import boke from './Boke'
export default {
  name: 'index',
  data () {
    return {
    }
  },
  components:{
    navs,
    boke
  },
  computed:{
    ...mapState([
      'navData',
      'articalData'
    ])
  },
  created(){
    if(!this.navData){
      this.$router.push({path:'/loading'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.index{
  width:100%;
  height:100%;
  background:url('../img/timg1.gif') no-repeat;
  background-size:100% 100%;
}
.head{
  width:100%;
}
.left{
  width:430px;
}
.left img{
  border-radius: 50%;
  margin:20px 0px 0px 40px;
}
.left h1{
  padding-top:90px;
  font-weight: 700;
  font-size:50px;
  float: right;
}
.cont{
  width:1500px;
  height:500px;
  margin:auto;
  margin-top: 60px;
}
</style>
