<template>
  <popup-picker :title="title" :data="options"  :columns='1' v-model="num" :placeholder="placeholder" @on-hide='change' :show-name="label?true:false"></popup-picker>
</template>
<script>
export default {
  props:{
    value:{

    },
    title:{
      default:''
    },
    placeholder:{
      default:'请选择'
    },
    arr:{
      default(){
        return []
      }
    },
    label:{
      default:""
    },
    valueKey:{
      default:""
    }
  },
  watch:{
    value(){
      this.setNum()     
    }
  },
  mounted(){
    this.setNum()
  },
  computed:{
    options(){
      var arr = []
      if(this.label){
        for(let item of this.arr){
          arr.push({
            name:item[this.label],
            value:item[this.valueKey].toString()
          })
        }
      }else{
        arr = this.arr;
      }
      return arr;
    }
  },
  data(){
    return{
      num:[]
    }
  },
  methods:{  
    setNum(){
      if(this.value==='' && this.value===undefined){
        return this.num = []
      }
      this.num = [this.value.toString()]
    },
    change(closeType){
      if(!closeType){
        return false;
      }
      if(!this.num.length){
        return false;
      }
      var value = this.num[0];
      this.$emit("input",value)
    }
  }
}
</script>
<style lang="less">
.SelectField .select{
  width: 100%;
  text-align: right;
}
.SelectField{
  background:rgba(255,255,255,1);
  border-radius:10px;
  width:100%;
  .mint-cell-title{
    flex-shrink: 0;
    flex-grow: 1;
    flex-basis: auto;
  }
  .mint-cell-value{
    width: 100%;
  }
  input{
    text-align: right;
    background-color: #fff;
    width: 100%;
  }
  .mint-popup{
    width:100%;
  }
  .select-img{
    width:25px;
    height:14px;
    flex-shrink: 0;
  }
  .picker-toolbar{
    text-align: right;
    color:#ef4f4f;
    padding-right: 10px;
    padding-top:10px;
  }
}
</style>