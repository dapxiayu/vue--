// 入口文件
import Vue from 'vue'

// 导入Mint-UI中的组件
// import {Header,Swipe,SwipeItem,Button} from 'mint-ui'
// Vue.component(Header.name,Header)
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
import MintUI from 'mint-ui'
// 导入mint-ui样式
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
// 导入时间格式插件
import moment from 'moment'

import swiper from './components/swiper.vue'
Vue.component('swiper', swiper)

// 安装vue-pic-preview图片预览插件
import VuePreview from 'vue-pic-preview'
Vue.use(VuePreview)

  

// 定义全局的过滤器
Vue.filter('dataFormat',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
  return moment(dataStr).format(pattern)
})
// 全局注册组件
import comment from './components/comment.vue'
Vue.component('comment', comment)


// 导入mui样式
import './libs/mui/css/mui.min.css'
import './libs/mui/css/icons-extra.css'

// 导入vue-resource
import VueResource from 'vue-resource'
// 安装vue-resource
Vue.use(VueResource)

// 设置vue-resource的请求根路径
Vue.http.options.root = 'http://www.lovegf.cn:8899/api/';

// 导入app组件
import app from './App.vue'

//导入路由的包
// import VueRouter from 'vue-router';
// 安装路由
// Vue.use(VueRouter)
//导入自己的router.js路由模块
import router from './router/index.js'



var vm = new Vue({
  el: '#app',
  router,
  render:c=>c(app),
  
})
