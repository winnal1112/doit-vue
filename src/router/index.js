import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home/Home.vue'
import login from '@/views/login/Login.vue'
import test from '@/views/test/test.vue'
import main from '@/views/main/main.vue'

// import test from '@/views/test/test.vue'
// import test1 from '@/views/test/test1.vue'

Vue.use(Router)

// 解决导航菜单重复点击报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  // 去除#前缀
  mode: 'history',
  routes: [
    {
      path: '/',
      component: login
    },
    {
      path: '/home',
      component: home,
      children: [
        {
          path: '/test',
          component: test
        },
        {
          path: '/main',
          component: main
        }
      ]
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/test',
      component: test
    },
  ]
})
