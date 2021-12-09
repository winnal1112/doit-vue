import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/login.vue'
import Register from '@/views/register/register.vue'
import Layout from '@/components/layout.vue'
import Home from '@/views/home/home.vue'
import Goods from '@/views/goods/goods.vue'
import Member from '@/views/member/member.vue'
import Staff from '@/views/staff/staff.vue'
import Supplier from '@/views/supplier/supplier.vue'
import ScreenShow from '@/views/screenShow/screenShow.vue'
import Test from '@/views/test/test.vue'
import Mydev from '@/views/mydev/mydev.vue'

Vue.use(Router)

// 解决导航菜单重复点击报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  mode: 'history',
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
      path: '/screenShow',
      component: Layout,
      children: [
        {
          path: '/',
          component: ScreenShow,
          meta: {title: '大屏展示'}
        }
      ]
    },
    {
      path: '/test',
      component: Layout,
      children: [
        {
          path: '/',
          component: Test,
          meta: {title: '测试页面'}
        }
      ]
    },
    {
      path: '/mydev',
      component: Layout,
      children: [
        {
          path: '/',
          component: Mydev,
          meta: {title: '开发页面'}
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
