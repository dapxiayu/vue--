import VueRouter from 'vue-router'
import Vue from 'vue'

// 导入对应的路由组件
import HomeContainer from '../pages/home'
import MemberContainer from '../pages/menmber'
import ShopcarContainer from '../pages/shopcar'
import SearchContainer from '../pages/search'
import newsListComponent from '../pages/newsList'
import newsInfoComponent from '../pages/newsInfo'
import photoListComponent from '../pages/photoList'
import photoInfoComponent from '../pages/photoInfo'
import goodsListComponent from '../pages/goodsList'
import goodsInfoComponent from '../pages/goodsInfo'
import goodsDescComponent from '../pages/goodsDesc'
import goodsCommentComponent from '../pages/goodsComment'


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
    {
      path: '/home/photoList',
      component: photoListComponent
    },
    {
      path: '/home/photoInfo/:id',
      component: photoInfoComponent
    },
    {
      path: '/home/goodsList',
      component: goodsListComponent
    },
    {
      path: '/home/goodsInfo/:id',
      component: goodsInfoComponent
    },
    {
      path: '/home/goodsDesc/:id',
      component: goodsDescComponent
    },
    {
      path: '/home/goodsComment/:id',
      component: goodsCommentComponent
    },
  ],
  linkActiveClass: 'mui-active'

})

//把路由对象暴露出去
export default router
