//全局mixin
import Vue from 'vue'
import MyHead from "./components/Common/Head"
import NumInput from "./components/Common/NumInput.vue"
import MyScroll from "./components/Common/MyScroll"
import ElNumInput from "./components/Common/ElNumInput.vue"
import ListUpload from "./components/Common/ListUpload.vue"
import SlideView from "./components/Common/SlideView.vue"
import AvatarUpload from "./components/Common/AvatarUpload.vue"

Vue.mixin({
  methods:{
    goback(){
      this.$router.go(-1);
    },
    isNaN(value){
      if(isNaN(value) || value==Infinity || value==-Infinity){
        return true
      }else{
        return false
      }
    },
    initSearch(){
      this.data.pageNo = 0;
      this.list = [];
      this.search()
    },
    search(){
      this.data.pageNo++;
      this.$http[this.interface](this.data).then(res=>{
        this.list = this.list.concat(res.data.list);
        this.$refs.scroll.complete(res.data.list.length)
      })
    },
    showLoad(text='',background='rgba(0, 0, 0, 0.7)',spinner='el-icon-loading',lock=true){
      this.loading = this.$loading({
        lock: lock,
        text: text,
        spinner: spinner,
        background: background
      });
    },
    hideLoad(){
      this.loading.close()
    },
    //数字化
    Number(value){
      if(isNaN(value)){
        return 0
      }else{
        return Number(value)
      }
    },
    exportFile(res,fileName){
      const content = res
      const blob = new Blob([content])
      if ('download' in document.createElement('a')) { // 非IE下载
        const elink = document.createElement('a')
        elink.download = fileName
        elink.style.display = 'none'
        elink.href = URL.createObjectURL(blob)
        document.body.appendChild(elink)
        elink.click()
        URL.revokeObjectURL(elink.href) // 释放URL 对象
        document.body.removeChild(elink)
      } else { // IE10+下载
        navigator.msSaveBlob(blob, fileName)
      }
    },
    //时间选择器
    showDateRange(type,time,title,start,minHour){
      let self = this;
      return new Promise((resolve)=>{
        self.$vux.datetime.show({
          format:type,
          value:time,
          startDate:start,
          clearText:title,
          minHour:minHour,
          confirmText:'确定',
          cancelText:'取消',
          onConfirm(val) {
            resolve(val)          
          },
        })
      })    
    },
    queryParams (data, isPrefix) {
      isPrefix = isPrefix ? isPrefix : false
      let prefix = isPrefix ? '?' : ''
      let _result = []
      for (let key in data) {
        let value = data[key]
        _result.push(key + '=' + value)
      }
  
      return _result.length ? prefix + _result.join('&') : ''
    }
  },
  components:{
    MyHead,
    NumInput,
    ElNumInput,
    ListUpload,
    MyScroll,
    SlideView,
    AvatarUpload
  },
  mounted(){
   
  },
  activated(){
    
  },
  deactivated(){
    
  },
  data(){
    return{
      imgBase:window.config.baseURL+"/zhezhenImg/",
      formDisabled:true
    }
  },
  watch:{
    
  }
});