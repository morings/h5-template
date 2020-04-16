```
template
├─.babelrc----------es6打包成es5配置
├─.editorconfig
├─.gitignore
├─.postcssrc.js
├─index.html----------入口index.html
├─package-lock.json
├─package.json
├─static
|   ├─.gitkeep
|   └config.js----------项目配置文件
├─src
|  ├─App.vue----------初始vue文件
|  ├─cfm.js----------各类询问框方法
|  ├─cookie.js----------cookie操作
|  ├─directive.js----------自定义指令
|  ├─globalMixin.js----------全局混入
|  ├─main.js----------入口文件
|  ├─rem.js----------转rem文件
|  ├─socket.js----------webSocket操作
|  ├─tool.js----------工具类
|  ├─valid.js----------效验方法
|  ├─vux.js----------移动端类库vux引入
|  ├─router
|  |   └index.js----------路由文件
|  ├─components
|  |     ├─Common
|  |     |   ├─AvatarUpload.vue----------单图片上传组件
|  |     |   ├─ElNumInput.vue----------elment样式的数字输入框
|  |     |   ├─Head.vue----------头部导航栏组件
|  |     |   ├─ListUpload.vue----------多图片上传组件
|  |     |   ├─MyScroll.vue----------下拉加载组件
|  |     |   ├─NumInput.vue----------vux样式数字输入框
|  |     |   ├─SlideView.vue----------登录滑框组件
|  |     |   └TabBar.vue----------底部导航栏
|  ├─assets
|  |   ├─data.js----------存放常用的固定数据
|  |   ├─styles
|  |   |   ├─index.css----------全局样式
|  |   |   └reset.css----------初始样式
|  |   ├─img
|  |   |  ├─home.png
|  |   |  ├─home1.png
|  |   |  ├─mescroll-empty.png
|  |   |  ├─mescroll-totop.png
|  |   |  ├─mine.png
|  |   |  └mine1.png
|  ├─Api
|  |  ├─api.js----------api文件
|  |  └service.js----------axios拦截器处理
├─config
|   ├─dev.env.js
|   ├─index.js
|   └prod.env.js
├─build
|   ├─build.js
|   ├─check-versions.js
|   ├─logo.png
|   ├─utils.js
|   ├─vue-loader.conf.js
|   ├─webpack.base.conf.js
|   ├─webpack.dev.conf.js
|   └webpack.prod.conf.js
```