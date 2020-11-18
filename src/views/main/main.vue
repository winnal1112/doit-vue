<template>
  <div class="main" style="width: 100%;height: 100%;">
    <div class="pageHeader" style="height: 60px;background-color: #FFFFFF;text-align: left;">
      <div style="width: 220px;height: 60px;text-align: center;float: left;border-bottom: 1px solid #E6E6E6;border-right: 1px solid #E6E6E6;">
        <img src="../../assets/imgs/logo.png" alt="" style="width: 220px;height: 60px;">
      </div>
      <div style="float: left;">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" :style="'width: ' + screenWidth + 'px;'">
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="5">首页</el-menu-item>
          <el-menu-item index="6">首页</el-menu-item>
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
          <el-menu-item index="4">我的中心</el-menu-item>
        </el-menu>
      </div>
      <div style="width: 200px;height: 60px;border-left: 1px solid #E6E6E6;border-bottom: 1px solid #E6E6E6;float: left;">
        <el-row>
          <el-col :span="12">
            <el-avatar :size="60"></el-avatar>
          </el-col>
          <el-col :span="12">
            <p style="padding-top: 6px;">winnal</p>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="pageMain" :style="'background-color: rgba(0,0,0,0);height: ' + screenHeight + 'px;'">
      &nbsp;
    </div>
    <div class="pageFooter" style="height: 40px;background-color: #E6E6E6">
      <p style="margin: 0px;padding-top: 12px;">publish by winnal</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        screenHeight: document.documentElement.clientHeight-100,
        screenWidth: document.documentElement.clientWidth-422,
        activeIndex: '1',
      }
    },
    watch: {
    },
    created() {
      // 浏览器缩小放大是控制高度
      window.onresize = () => {
        this.screenHeight = document.documentElement.clientHeight-100
        this.screenWidth = document.documentElement.clientWidth-422
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
  .el-menu-demo {
    text-align: center;
  }
  .pageMain {
    background-image: url(../../assets/imgs/background.jpg);
    background-size: 100%;
  }
</style>
