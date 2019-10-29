import axios from 'axios'
axios.defaults.withCredentials=true;
import {msgerror,msgsuccess} from "../cfm"
import router from '../router/index'
import {delCookie} from "../cookie.js"
import { Loading } from 'element-ui';
export const baseURL = window.config.baseURL;
const service = axios.create({
  baseURL:process.env.NODE_ENV=='production'?baseURL:'/api/',
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
      if(MaskLoad){
        MaskLoad.close();
        MaskLoad = null;
      }
      return response.data;
  },
  error => {  //响应错误处理
    if(MaskLoad){
      MaskLoad.close();
      MaskLoad = null;
    }
    showerror(error.response.data);
    return Promise.reject(error)
  }
);
function showerror(data){
  msgerror(errorInfo[data.error_code])
  
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


