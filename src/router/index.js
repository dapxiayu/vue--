import VueRouter from 'vue-router'
import Vue from 'vue'

// 导入对应的路由组件
import HomeContainer from '../pages/home'
import MemberContainer from '../pages/menmber'
import ShopcarContainer from '../pages/shopcar'
import SearchContainer from '../pages/search'
import newsListComponent from '../pages/newsList'
import newsInfoComponent from '../pages/newsInfo'


Vue.use(VueRouter)

var router = new VueRouter({
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: HomeContainer
    },
    {
      path: '/member',
      component: MemberContainer
    },
    {
      path: '/shopcar',
      component: ShopcarContainer
    },
    {
      path: '/search',
      component: SearchContainer
    },
    {
      path: '/home/newsList',
      component: newsListComponent
    },
    {
      path: '/home/newsInfo/:id',
      component: newsInfoComponent
    },
  ],
  linkActiveClass: 'mui-active'

})

//把路由对象暴露出去
export default router
