// 入口文件
import Vue from 'vue'
// 导入Mint-UI中的组件
import {Header} from 'mint-ui'
Vue.component(Header.name,Header)
// 导入mint-ui样式
import 'mint-ui/lib/style.css'
// 导入mui样式
import './libs/mui/css/mui.min.css'
// 导入app组件
import app from './App.vue'

// import router from './router'


var vm = new Vue({
  el: '#app',
  render:c=>c(app)
  
})
