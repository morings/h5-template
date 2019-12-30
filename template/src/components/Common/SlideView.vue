<template>
  <div class="SlideView" @touchstart='onTouchStart' @touchmove='onTouchMove' @touchend='onTouchEnd'>
    <div class="left" :style="{marginLeft:left+'px'}" >
      <slot name='left'></slot>
    </div>
    <div class="right" ref="right">
      <slot name='right' ></slot>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      left:0,
      start:0,
      startLeft:0
    }
  },
  methods:{
    onTouchStart(e){
      this.start = e.changedTouches[0].pageX;
      this.startLeft = this.left;
    },
    onTouchMove(e){   
      let now = e.changedTouches[0].pageX;
      let start = this.start;
      let left = now - start + this.startLeft;
      let width = this.$refs.right.offsetWidth;
      this.left = left>0?0:left<-width?-width:left
      
      e.preventDefault();
      
    },
    onTouchEnd(e){
      let now = e.changedTouches[0].pageX;
      let start = this.start;
      let left = now - start + this.startLeft;
      let width = this.$refs.right.offsetWidth;
      this.left = left>-(width/2)?0:-width
      
    }

  },
  
}
</script>
<style lang="less" scoped>
.SlideView{
  overflow: hidden;
  display: flex;
  .left{
    width:100%;
    flex-shrink: 0;
  }
  .right{
    flex-shrink: 0;
    display: flex;
  }
}
</style>