import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/login.vue'
import Layout from '@/components/layout.vue'
import Home from '@/views/home/home.vue'
import Goods from '@/views/goods/goods.vue'
import Member from '@/views/member/member.vue'
import Staff from '@/views/staff/staff.vue'
import Supplier from '@/views/supplier/supplier.vue'

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
      name: 'layout',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: '/home',
          component: Home,
          meta: {title: '首页'}
        }
      ]
    },
    {
      path: '/goods',
      component: Layout,
      children: [
        {
          path: '/',
          component: Goods,
          meta: {title: '商品管理'}
        }
      ]
    },
    {
      path: '/member',
      component: Layout,
      children: [
        {
          path: '/',
          component: Member,
          meta: {title: '会员管理'}
        }
      ]
    },
    {
      path: '/staff',
      component: Layout,
      children: [
        {
          path: '/',
          component: Staff,
          meta: {title: '员工管理'}
        }
      ]
    },
    {
      path: '/supplier',
      component: Layout,
      children: [
        {
          path: '/',
          component: Supplier,
          meta: {title: '供应商管理'}
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
