<template>
  <scroller use-pullup :pullup-config="pullupDefaultConfig" @on-pullup-loading="loadMore"
    use-pulldown :pulldown-config="pulldownDefaultConfig" @on-pulldown-loading="refresh"
    lock-x ref="scrollerBottom" :height="height" class="RefleshScroll" >
    <slot></slot>
  </scroller>
 
</template>
<script>
	import {Scroller, XHeader} from 'vux'
  const pulldownDefaultConfig = {
    content: '下拉刷新',
    height: 40,
    autoRefresh: false,
    downContent: '下拉刷新',
    upContent: '释放后刷新',
    loadingContent: '正在刷新...',
    clsPrefix: 'xs-plugin-pulldown-'
  }

  const pullupDefaultConfig = {
    content: '',
    pullUpHeight: 60,
    height: 40,
    autoRefresh: false,
    downContent: '释放后加载',
    upContent: '',
    loadingContent: '加载中...',
    clsPrefix: 'xs-plugin-pullup-'
  }

  export default {
    props:['height'],
    components: {
      XHeader,
      Scroller
    },
    mounted() {
      this.$nextTick(() => {
        this.$refs.scrollerBottom.reset({top: 0})
      })
    },
    data() {
      return {
        pullupDefaultConfig: pullupDefaultConfig,
        pulldownDefaultConfig: pulldownDefaultConfig
      }
    },
    methods: {
      refresh() {
        this.$emit("refresh")
      },
      loadMore() {
        this.$emit("loadMore")
      },
      complete(){
        this.$refs.scrollerBottom.donePullup();
        this.$refs.scrollerBottom.donePulldown();
        this.$refs.scrollerBottom.reset({bottom: 0})
      }
    }
  }
</script>