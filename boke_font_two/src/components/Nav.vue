<template>
  <div class="nav">
    <div class="zuo"></div>
    <el-row class="block-col-2">
      <el-col :span="12">
        <el-dropdown v-for="i in datas">
          <span class="el-dropdown-link">
            {{i.onedata.cnname}}<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown" class="el-dropdown-menu">
              <el-dropdown-item v-for="item in i.twodata">{{item.cnname}}</el-dropdown-item>

          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'Nav',
  data () {
    return {
        activeIndex2: '1',
        // data:[]
      }
  },
  props:["datas"],
  created(){
    // this.data=datas;
    // this.axios.get("http://localhost:9999/api/front_article/getNav").then((data)=>{
    //   // console.log(data.data.data);
    //   this.data=data.data.data
    // })
  },
  methods:{
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>
<style scoped>
a{
  text-decoration: none;
}
.nav{
 width: 100%;
 height:30px;
 line-height:30px;
}
.zuo{
  width:500px;
  float: left;
}
.el-menu{
  font-size:20px;
}
.block-col-2{
  margin-left:30px;
  width:400px;
  float: right;
}
.el-dropdown-link{
  padding:0px 10px;
  font-size:16px;
  font-weight:600;
  margin-left:10px;
  /*color:#48576a;*/
}
.el-dropdown-menu{
  background:#000;
  color:#999;
  border:none;
  background: rgba(0,0,0,0.5);
}
</style>
