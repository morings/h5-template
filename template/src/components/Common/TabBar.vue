//底部导航栏
<template>
  <div class="tabbar">
    <div class="item" v-for="(item,index) in tabbar" :key="index" @click="tabClick(item,index)">
      <img :src="selectIndex==index?item.focusImage:item.image" alt="">
      <div :class="['name',selectIndex==index?'selected':'']">{{item.name}}</div>
    </div>
  </div>
</template>
<script>
import {tabbar} from "@assets/data.js"
export default {
  data(){
    return{
      tabbar:tabbar,
      selectIndex:0
    }   
  },
  mounted(){
    let path = this.$route.path;
    if(path=='/MyLogistics'){
      this.selectIndex = 0
    }else if(path=='/SourceMaterial'){
      this.selectIndex = 1
    }else if(path=='/Replenishment'){
      this.selectIndex = 2
    }else if(path=='/ShoppingCart'){
      this.selectIndex = 3
    }else if(path=='/Mine'){
      this.selectIndex = 4
    }
  },
  methods:{
    tabClick(item,index){
      if(index!=this.selectIndex){
        this.$router.push({
          path:item.path
        });
        this.selectIndex = index;
      }    
    }
  }
}
</script>
<style lang="less" scoped>
.tabbar{
  background-color: #fff;
  position: fixed;
  bottom: 0;
  display: flex;
  width:100%;
  padding: 20px 0;
  .item{
    flex:1;
    text-align:center;
    img{
      width: 46px;
      height: 46px;
    }
    .name{
      margin-top:11px;
      width:59px;
      height:20px;
      font-size:20px;
      font-family:PingFang SC;
      font-weight:500;
      color:rgba(179,179,179,1);
      width:100%;
    }
    .selected{
      color:rgba(22,22,22,1);
    }
  }
}
</style>