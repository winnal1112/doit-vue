import router from '../router/index.js'

router.beforeEach((to, from, next) => {
  // 获取本地用户信息
  let userInfo = localStorage.getItem('userInfo')
  if (userInfo) {
    next()
  } else {
    if (to.path === '/login' || to.path === '/register') {
      next()
    } else {
      next({path: '/login'})
    }
  }
})
