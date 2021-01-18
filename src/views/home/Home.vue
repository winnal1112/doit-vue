<template>
  <div class="home-page" ref="homepage">
    <el-container>
      <el-header height="60px" style="text-align: center;">
        <el-container>
          <el-aside width="260px" style="background-color: #DDDDDD;padding-top: 20px;">Logo</el-aside>
          <el-main>
            <el-menu :default-active="$route.path" class="home-menu" :router="router" mode="horizontal" @select="handleSelect">
              <el-menu-item index="/main">首页</el-menu-item>
              <el-menu-item index="/test">test页</el-menu-item>
              <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="2-4-1">选项1</el-menu-item>
                  <el-menu-item index="2-4-2">选项2</el-menu-item>
                  <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="3">消息中心</el-menu-item>
              <el-menu-item index="4"><a href="" target="_blank">订单管理</a></el-menu-item>
            </el-menu>
          </el-main>
          <el-aside width="260px" style="background-color: #DDDDDD;padding-top: 1px;">
            <el-col :span="10">
              <el-avatar :size="56"></el-avatar>
            </el-col>
            <el-col :span="14">
              <p style="height: 28px;">个人信息</p>
            </el-col>
          </el-aside>
        </el-container>
      </el-header>
      <el-container :style="'height: ' + screenHeight + 'px;'">
        <el-aside width="260px" style="background-color: #aaffff;">Aside</el-aside>
        <el-main style="background-color: #55ffff">
          <router-view></router-view>
        </el-main>
        <el-aside width="260px" style="background-color: #aaffff;">Aside</el-aside>
      </el-container>
      <el-footer height="20px" style="background-color: #DDDDDD;padding-top: 2px;">Published By YangWenhao</el-footer>
    </el-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        router: true,
        screenHeight: document.documentElement.clientHeight-80,
      }
    },
    watch: {
    },
    created() {
      // 浏览器缩小放大是控制高度
      window.onresize = () => {
        this.screenHeight = document.documentElement.clientHeight-80
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  .home-page {
    width: 100%;
    height: 100%;
  }
  .home-page .el-header, .home-page .el-main {
    padding: 0px;
  }
</style>
