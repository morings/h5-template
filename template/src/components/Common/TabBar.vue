<template>
  <tabbar class="TabBar">
    <tabbar-item v-for="(item,index) in tabbars" :key="index" @on-item-click='tabClcik(index)' :selected='active==index'>
      <template slot="label">{{item.label}}</template>
      <template slot="icon">
        <img :src="item.icon" alt="">
      </template>
      <template slot="icon-active">
        <img :src="item.activeIcon" alt="">
      </template>
    </tabbar-item>
  </tabbar>
</template>
<script>
import home from "../../assets/img/home.png"
import home1 from "../../assets/img/home1.png"
import mine from "../../assets/img/mine.png"
import mine1 from "../../assets/img/mine1.png"
export default {
  props:["menu"],
  data(){
    return{
      tabbars:[
        {
          label:"首页",
          activeIcon:home,
          icon:home1
        },
        {
          label:"我的",
          activeIcon:mine,
          icon:mine1
        }
      ],
      active:0
    }
  },
  mounted(){
    this.active = sessionStorage.getItem("menu")?sessionStorage.getItem("menu"):0;
  },
  methods:{
    tabClcik(index){
      this.active = index;
      this.$parent.change(this.active)
    }
  }
}
</script>
<style lang="less">
.TabBar{
  a{
    text-decoration:none
  }
  .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{
    color:#999999
  }
}
</style>