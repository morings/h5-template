<template>
  <x-header :class="['Head','AgentHead']" :title="title" :left-options='{showBack:showBack,preventGoBack:true}' @on-click-back='back' v-if="loginRole=='代理商' || loginRole=='收银员'">
    <template slot="right" v-if="home">
      <x-icon type="home" class="icon-red" fill="#343434" @click.native="goIndex"></x-icon>
    </template>
    <template slot="right" v-if="loginOut">
      <x-icon type="log-out" class="log-out" fill="#343434" @click.native="exit"></x-icon>
    </template>
  </x-header>
  <x-header :class="['Head']" :title="title" :left-options='{showBack:showBack,preventGoBack:true}' @on-click-back='back' v-else>
    <template slot="right" v-if="home">
      <x-icon type="home" class="icon-red" fill="#ffffff" @click.native="goIndex"></x-icon>
    </template>
    <template slot="right" v-if="loginOut">
      <x-icon type="log-out" class="log-out" fill="#ffffff" @click.native="exit"></x-icon>
    </template>
  </x-header>
</template>
<script>
export default {
  props:{
    title:{
      default:''
    },
    showBack:{
      default:true
    },
    home:{
      default:true
    },
    canback:{
      default:true
    },
    loginOut:{
      default:false
    }
  },
  data(){
    return{
      
    }
  },
  methods:{
    back(){
      if(this.canback){
        return this.$router.go(-1)
      }
      this.$emit("back")
    },
    goIndex(){
      sessionStorage.removeItem("menu");
      if(this.loginRole=='收银员'){
        return this.$router.push("/CashHome")
      }
      this.$router.push("/Index")
    },
    exit(){
      this.$cfm("确认登出").then(res=>{
        this.$delCookie("BusinessId");
        this.$delCookie("role");
        if(window.mySocket){
          window.mySocket.close()
        };
        this.$router.push("/Login")
      })
      
    }
  }
}
</script>
<style lang="less">
.vux-header.AgentHead{
  background-color: #fff;
  .left-arrow:before{
    border-color:#343434!important
  }
  .vux-header-back{
    color:#343434
  }
  .vux-header-title{
    
    color:rgba(52,52,52,1);
  }
}
.vux-header.Head .vux-header-title{
  font-size:18PX;
  font-family:PingFang SC;
  font-weight:bold;
}
</style>