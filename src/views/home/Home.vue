<template>
  <div class="homepage" ref="homepage" style="width: 1900px;height: 969px;">
    <div class="navigation-bar" :style="'width: 200px;height:' + screenHeight + 'px;float: left'">
      <div style="width: 100%;height: 80px;background-color: #e6e6e6;border-right: 1px solid #e6e6e6;">logo</div>
      <!-- <el-radio-group v-model="isCollapse">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group> -->
      <div :style="'width: 100%;height:' + (screenHeight - 80) + 'px;text-align: left;border-right: 1px solid #e6e6e6;'">
        <el-menu default-active="/test" class="el-menu-vertical-demo" :router="true" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
          <el-submenu index="/home">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
              <span slot="title">分组一</span>
              <el-menu-item index="/test">测试1</el-menu-item>
              <el-menu-item index="/test1">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <span slot="title">选项4</span>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </div>
    </div>
    <div class="container" :style="'width: 88%;height:' + screenHeight + 'px;float: left'">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        screenHeight: document.documentElement.clientHeight,
        isCollapse: false
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 100%;
    min-height: 400px;
  }
  .homepage .el-menu {
    border-right: 0px;
  }
</style>
