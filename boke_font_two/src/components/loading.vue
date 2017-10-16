<template>
  <div class="loading">
   <p v-if="state=='start'">数据开始请求 </p>
   <p v-else-if="state=='loading'">数据正在加载 </p>
   <p v-else-if="state=='end'">数据请求完毕 </p>
   <p v-else>数据请求失败，再次发起数据请求 </p>
  </div>
</template>
<script>
import {mapActions,mapState} from 'vuex'
export default {
  name: 'loading',
  data () {
    return {
    }
  },
  created(){
    this.defaultData(this.redirectfn)
  },
  computed:{
    ...mapState({
      state:function(state){
        this.$router.go(-1)
        return state.state
      }
    })
  },
  methods:{
    ...mapActions([
      'defaultData'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .loading{
    text-align: center;
    color:#999;
    font-size:30px;
    padding-top:20px;
  }
</style>
