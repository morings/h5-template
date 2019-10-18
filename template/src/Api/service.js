import axios from 'axios'
axios.defaults.withCredentials=true;
import {msgerror,msgsuccess} from "../cfm"
import router from '../router/index'
import {delCookie} from "../cookie.js"
export const baseURL = window.config.baseURL;
const service = axios.create({
  baseURL:baseURL,
  headers:{
    'Content-Type':'application/json'
  }
});
const errorInfo = {
}
var MaskLoad = null;
service.interceptors.request.use(config => {
  MaskLoad = Loading.service({
    lock: true,
    text: '数据请求中',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
  });
  return config;
}, error => {  //请求错误处理
  return Promise.reject(error)
});
service.interceptors.response.use(
  response => {  //成功请求到数据
      document.getElementById("transMask").style.display = "none";
      if(MaskLoad){
        MaskLoad.close();
        MaskLoad = null;
      }
      if(response.data.success){
        if(response.config.data && typeof(response.config.data) == 'string'){
          var jsonData = JSON.parse(response.config.data);
          if(jsonData.showSuccess){
            msgsuccess(response.data.msg)
          }
        }
        return response.data.data?response.data.data:response.data
      }else{
        showerror(response.data);
        return Promise.reject()
      }  
  },
  error => {  //响应错误处理
    document.getElementById("transMask").style.display = "none";
    if(MaskLoad){
      MaskLoad.close();
      MaskLoad = null;
    }
    showerror(error.response.data);
    return Promise.reject(error)
  }
);
function showerror(data){
  if(data.code==10086){
    delCookie("username");
    router.push({
      path:"/login",
    })
  }else{
    msgerror(data.msg?data.msg:'接口错误')
  }
  
};
function deleteEmptyProperty(object){
  for (var i in object) {
    var value = object[i];
    if (typeof value === 'object') {
      if (Array.isArray(value)) {
        if (value.length == 0) {
          delete object[i];
          continue;
        }
      }
      deleteEmptyProperty(value);
      if (isEmpty(value)) {
        delete object[i];
      }
    } else {
      if (value === '' || value === null || value === undefined) {
        delete object[i];
      }
    }
  }
}

function isEmpty(object) {
  for (var name in object) {
    return false;
  }
  return true;
}

export default service;


