// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./rem"
import "./assets/styles/reset.css"
import "./assets/styles/index.css"
import './globalMixin'
import "./directive"
import {deepClone} from "./tool"
import {setCookie,getCookie,delCookie} from "./cookie"
import {msgerror,cfm,msgsuccess} from "./cfm"
import $http from "./Api/api"
Vue.config.productionTip = false
Vue.prototype.$http = $http;
Vue.prototype.$deepClone = deepClone;
Vue.prototype.$msgsuccess = msgsuccess;
Vue.prototype.$msgerror = msgerror;
Vue.prototype.$cfm = cfm;
Vue.prototype.$setCookie = setCookie;
Vue.prototype.$getCookie = getCookie;
Vue.prototype.$delCookie = delCookie;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
