import {getCookie} from "./cookie"
import {message} from "element-ui"
var lockReconnect = null;
//创建websocket链接
export const createWebSocket = function(){
  if(!getCookie("BusinessId")){
    return false;
  }
  try{
    if(!window.WebSocket){
      window.WebSocket = window.MozWebSocket;
    } 
    if(window.WebSocket){
      window.mySocket = new WebSocket(window.config.socket+getCookie("BusinessId")+"/");
      initEventHandle();
    }else{
      this.$msgerror('您的浏览器不支持WebSocket协议！链接失败')
    }    
  }catch(e){
    console.log(e);
    reconnect();    
  }     
}
//初始化websocket事件
const initEventHandle = function(){
  window.mySocket.onmessage = function(event){
    var audio = document.getElementById("myAudio");
    var mp3 = event.data;  
    audio.setAttribute("src",mp3);
    audio.play()
     
  };
  window.mySocket.onclose = function () {
    reconnect();
    console.log("ws连接关闭!"+new Date().toUTCString());
  };
  window.mySocket.onopen = function () {
    console.log("ws连接成功!"+new Date().toUTCString());
    
  };
  window.mySocket.onerror = function () {
    reconnect();
    console.log("ws连接错误!");
  };
}
//重连websocket
const reconnect = function(){
  if(lockReconnect) return;
  lockReconnect = true;
  setTimeout(()=>{     //没连接上会一直重连，设置延迟避免请求过多
    createWebSocket();
    lockReconnect = false;
  }, 2000);
}