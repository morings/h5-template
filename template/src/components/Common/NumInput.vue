<template>
  <x-input   ref="elInput" :value="value" :disabled="disabled"      @on-blur="blur" :placeholder="placeholder" :readonly='readonly' :is-type='isType' :required='required' :title='title' type="text" :text-align='textAlign' ></x-input>
</template>
<script>
export default {
  name:'NumInput',
  props:{
    title:{
      default:""
    },
    value:{

    },
    textAlign:{
      default:'right'
    },
    required:{
      default:false
    },
    digit:{
      default:0
    },
    disabled:{
      default:false
    },
    max:{
      default:false
    },
    negative:{
      default:false
    },
    placeholder:{
      default:''
    },
    readonly:{
      default:false
    },
    isType:{
      type: Function,
      default: function(){
        return{valid:true}
      },
    }
  },
  mounted(){
    this.num = this.value;
    var input = this.$el.querySelector("input");
    input.addEventListener("input",this.handInput);
  },
  methods:{
    blur(){
      this.$emit('blur')
    },
    //只包括正数
    handInput(e){
      let event = e?e:window.event;
      if(this.negative){
        return this.handNegative()
      }
      let self = this;
      var value = event.target.value; 
       if(self.digit==0){
        value = value.replace(/[^\d]/g,"");
      }else{
        value = value.replace(/[^\d.]/g,""); //清除"数字"和"."以外的字符
        value = value.replace(/^\./g,""); //验证第一个字符是数字
        value = value.replace(/\.{2,}/g,"."); //只保留第一个, 清除多余的
        value = value.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
        if(self.digit<100){
          var str = "^(\\-)*(\\d+)\\.("
          for(var i=0;i<self.digit;i++){
            str = str+"\\d";
          }
          str= str+").*$";
          var reg = new RegExp(str)
        }
        //value = value.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3'); //只能输入两个小数
        value = value.replace(reg,'$1$2.$3');
      }
      if(self.max!==false && value>self.max){
        value = self.max;
      };  
      console.log(value);
      event.target.value = value;
      self.$emit('input',value);
     
    },
    //包括负数
    handNegative(){
      let self = this;
      var value = self.$el.querySelector("input").value;
      if(self.digit==0){
        value = value.replace(/[^\-\d]/g,"");
      }else{
        value = value.replace(/[^\-\d.]/g,""); //清除"数字"和"."和'-'以外的字符
        value = value.replace(/^\./g,""); //验证第一个字符不是'.'
        value = value.replace(/\.{2,}/g,"."); //只保留第一个'.', 清除多余的
        value = value.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
        if(self.digit<100){
          var str = "^(\\-)*(\\d+)\\.("
          for(var i=0;i<self.digit;i++){
            str = str+"\\d";
          }
          str= str+").*$";
          var reg = new RegExp(str)
        }
        //value = value.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3'); //只能输入两个小数
        value = value.replace(reg,'$1$2.$3');
      }
      value = value.replace(/\-{2,}/g,"-"); //只保留第一个, 清除多余的
      value = value.replace(/^(\-)/,"$#$").replace(/\-/g,"").replace("$#$","-");
      event.target.value = value;
      self.$emit('input', value);   
    }
  }
}
</script>

