import  { ToastPlugin ,ConfirmPlugin } from 'vux'
import Vue from "vue"
import { resolve } from 'upath';
Vue.use(ToastPlugin,{position: 'middle'});
var self = new Vue()
export const msgerror = function(msg){
  self.$vux.toast.show({
    text:msg,
    type:'cancel'
  })
}
export const cfm = function(msg,title='提示'){
  return new Promise((resolve)=>{
    this.$vux.confirm.show({
      title,
      content:msg,
      onConfirm :()=>{
        resolve()
      }
    })
  })
}
export const msgsuccess = function(msg){
  self.$vux.toast.show({
    text:msg,
    type:'success'
  })
}
