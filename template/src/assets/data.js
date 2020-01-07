//数据文件
import wdwl from "./image/tabbar/wdwl.png"
import sck from "./image/tabbar/sck.png"
import wybh from "./image/tabbar/wybh.png"
import gwc from "./image/tabbar/gwc.png"
import wd from "./image/tabbar/wd.png"
import wdwl_ from "./image/tabbar/wdwl_.png"
import sck_ from "./image/tabbar/sck_.png"
import wybh_ from "./image/tabbar/wybh_.png"
import gwc_ from "./image/tabbar/gwc_.png"
import wd_ from "./image/tabbar/wd_.png"
export const tabbar = [
  {
    name:"我的物流",
    image:wdwl,
    focusImage:wdwl_,
    path:'/MyLogistics'
  },
  {
    name:"素材库",
    image:sck,
    focusImage:sck_,
    path:'/SourceMaterial'
  },
  {
    name:"我要补货",
    image:wybh,
    focusImage:wybh_,
    path:'/Replenishment'
  },
  {
    name:"购物车",
    image:gwc,
    focusImage:gwc_,
    path:'/ShoppingCart'
  },
  {
    name:"我的",
    image:wd,
    focusImage:wd_,
    path:"/Mine"
  }
]
