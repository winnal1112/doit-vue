import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home/Home.vue'
import main from '@/views/main/main.vue'

import test from '@/views/test/test.vue'
import test1 from '@/views/test/test1.vue'

Vue.use(Router)

// 解决导航菜单重复点击报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      redirect: '/main',
      children: [
        {
          path: '/main',
          name: 'main',
          component: main,
        },
        {
          path: '/test',
          name: 'test',
          component: test,
        },
        {
          path: '/test1',
          name: 'test1',
          component: test1,
        }
      ]
    }
  ]
})
