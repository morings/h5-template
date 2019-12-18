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
  return config;
}, error => {  //请求错误处理
  return Promise.reject(error)
});
service.interceptors.response.use(
  response => {  //成功请求到数据
      return response.data;
  },
  error => {  //响应错误处理
    showerror(error.response.data);
    return Promise.reject(error)
  }
);
function showerror(data){
  msgerror(errorInfo[data.error_code])
  
};


function isEmpty(object) {
  for (var name in object) {
    return false;
  }
  return true;
}

export default service;


