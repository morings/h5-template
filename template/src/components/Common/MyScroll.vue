<template>
  <mescroll-vue ref="mescroll" :up="mescrollUp" @init="mescrollInit">
    <slot></slot>
  </mescroll-vue>
</template>
<script>
import MescrollVue from 'mescroll.js/mescroll.vue'
export default {
  name: 'mescrollComponent',
  props:{
    pageSize:{
      default:10
    },
    warpId:{
      default:''
    },
    auto:{
      default:true
    },
    lazyLoad(){
      return{
        use: true,
        attr: 'imgurl',
        showClass: 'mescroll-lazy-in',
        delay: 500,
        offset: 200
      }
    }
  },
  components: {
    MescrollVue
  },
  data () {
    return {
      mescroll: null, // mescroll实例对象
      mescrollUp: {
        callback: this.upCallback, // 上拉回调,此处可简写; 相当于 callback: function (page, mescroll) { getListData(page); }
        page: {
          num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
          size: this.pageSize // 每页数据的数量
        },
        auto:auto,
        noMoreSize: 5, // 如果列表已无数据,可设置列表的总数量要大于等于5条才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看
        toTop: {
          src: '../../assets/img/mescroll-totop.png' // 回到顶部按钮的图片路径,支持网络图
        },
        empty: {
          // 列表第一页无任何数据时,显示的空提示布局; 需配置warpId才生效;
          warpId: this.warpId, // 父布局的id;
          icon: '../../assets/img/mescroll-empty.png', // 图标,支持网络图
          tip: '暂无相关数据~', // 提示
        },
        lazyLoad: this.lazyLoad
      },
    }
  },
  beforeRouteEnter (to, from, next) { // 如果没有配置回到顶部按钮或isBounce,则beforeRouteEnter不用写
    next(vm => {
      // 找到当前mescroll的ref,调用子组件mescroll-vue的beforeRouteEnter方法
      vm.$refs.mescroll && vm.$refs.mescroll.beforeRouteEnter() // 进入路由时,滚动到原来的列表位置,恢复回到顶部按钮和isBounce的配置
    })
  },
  beforeRouteLeave (to, from, next) { // 如果没有配置回到顶部按钮或isBounce,则beforeRouteLeave不用写
    // 找到当前mescroll的ref,调用子组件mescroll-vue的beforeRouteEnter方法
    this.$refs.mescroll && this.$refs.mescroll.beforeRouteLeave() // 退出路由时,记录列表滚动的位置,隐藏回到顶部按钮和isBounce的配置
    next()
  },
  methods: {
    // mescroll组件初始化的回调,可获取到mescroll对象
    mescrollInit (mescroll) {
      this.mescroll = mescroll
    },
    // 上拉回调 page = {num:1, size:10}; num:当前页 ,默认从1开始; size:每页数据条数,默认10
    upCallback (page, mescroll) {
      if (page.num === 1){
        this.$emit("refresh");
      }else{
        this.$emit("loadMore");
      }    
    },
    complete(){
      this.$nextTick(() => {
        this.mescroll.endSuccess(0)
      })
    },
    error(){
      this.mescroll.endErr()
    }  
  },
  
}
</script>