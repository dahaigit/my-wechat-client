import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/home'
import userInfo from '@/views/userInfo'
import Token from '@/libs/token'
import login from '@/views/login'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/hello',
      component: HelloWorld
    },
    {
      path: '/user/info',
      component: userInfo,
      meta: {
        title: '个人中心'
      }
    },
    {
      path: '/login',
      component: login,
      meta: {
        title: '正在授权登陆请稍等...'
      }
    }
  ]
})

// 通过token，判断用户是否登录
let loggedIn = () => {
  if (Token.get().getAuthAccess() === '') {
    return false
  } else {
    return true
  }
}

// 路由守卫
router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? to.meta.title : '大海测试号'
  // 用户没有登陆则跳转到登陆界面
  if (!loggedIn() && to.path != '/login') {
    next({
      path: '/login'
    })
    return false
  }
  next()
})

export default router
