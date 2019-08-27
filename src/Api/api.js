import service from "./service";
import {baseURL} from "./service"
//export const baseUrl = "http://39.104.50.13:8888/"
const $http = {};
//获取商圈根据品牌id
$http.getShopByBrandId = (opt)=>{
  return service.post("/HWJHP/applet/index/getShopByBrandId",opt)
}
//根据品牌根据商圈
$http.getBrandByShopId = (opt)=>{
  return service.post("/HWJHP/applet/index/getBrandByShopId",opt)
}
//获取字典表的列表
$http.indexBrandType = (opt)=>{
  return service.post("/HWJHP/applet/index/indexBrandType",opt)
}
//查询所有的品牌
$http.indexBrand = (opt)=>{
  return service.post("/HWJHP/applet/index/indexBrand",opt)
}
//查询所有的商圈
$http.indexShop = (opt)=>{
  return service.post("/HWJHP/applet/index/indexShop",opt)
}
//查询所有优惠券根据微信用户距商圈的距离升序
$http.getAllAppletDiscounts = (opt)=>{
  return service.post("/HWJHP/applet/discounts/getAllAppletDiscounts",opt)
}
//获取店铺下所有的优惠券列表
$http.getAppletDiscounts = (opt)=>{
  return service.post("/HWJHP/applet/discounts/getAppletDiscounts",opt)
}
//优惠券详情
$http.getAppletDiscountsDetails = (opt)=>{
  return service.post("/HWJHP/applet/discounts/getAppletDiscountsDetails",opt)
}
//根据品牌查询店铺列表
$http.getStoreList = (opt)=>{
  return service.post("/HWJHP/applet/index/getStoreList",opt)
}
//商圈详情
$http.getShopDetails = (opt)=>{
  return service.post("/HWJHP/applet/index/getShopDetails",opt)
}
//根据商圈查询它下面的店铺列表
$http.getStoreListByShop = (opt)=>{
  return service.post("/HWJHP/applet/index/getStoreListByShop",opt)
}
//领取优惠券
$http.getDiscounts = (opt)=>{
  return service.post("/HWJHP/applet/userDiscounts/getDiscounts",opt)
}
//查询店铺详情
$http.getAppletStoreDetails = (opt)=>{
  return service.post("/HWJHP/applet/store/getAppletStoreDetails",opt)
}
//获取店铺优惠券
$http.getAppletDiscounts = (opt)=>{
  return service.post("/HWJHP/applet/discounts/getAppletDiscounts",opt)
}
//获取用户信息
$http.getUserInfo = (opt)=>{
  return service.post("/HWJHP/applet/users/getUserInfo",opt)
}
//店铺登录
$http.getAppletStoreLogin = (opt)=>{
  return service.post("/HWJHP/applet/store/getAppletStoreLogin",opt)
}
//校验优惠码
$http.nuclearCode = (opt)=>{
  return service.post("/HWJHP/applet/userDiscounts/nuclearCode",opt)
}
//发送验证码
$http.sendSMS = (opt)=>{
  return service.post("/HWJHP/applet/sms/sendSMS",opt)
}
//开通会员
$http.registerUsers = (opt)=>{
  return service.post("/HWJHP/applet/users/registerUsers",opt)
}
//查询我的优惠
$http.getMyCountsList = (opt)=>{
  return service.post("/HWJHP/applet/userDiscounts/getMyCountsList",opt)
}
//更新会员
$http.updateWxUser = (opt)=>{
  return service.post("/HWJHP/applet/users/updateWxUser",opt)
}
//店铺密码修改
$http.updateAppletStorePassword = (opt)=>{
  return service.post("/HWJHP/applet/store/updateAppletStorePassword",opt)
}
//获取会员信息
$http.getVipData = (opt)=>{
  return service.post("/HWJHP/applet/vip/getVipData",opt)
}
//微信用户授权后获取他的信息
$http.getWXUsers = (opt)=>{
  return service.post("/HWJHP/applet/users/getWXUsers",opt)
}
export default $http
