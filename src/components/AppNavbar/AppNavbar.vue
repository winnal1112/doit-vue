<template>
  <div class="navbar">
    <el-menu
      :router="true"
      :default-active="defaultActive"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="/home">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/member/">
        <i class="el-icon-user-solid"></i>
        <span slot="title">会员管理</span>
      </el-menu-item>
      <el-menu-item index="/mydev/">
        <i class="el-icon-s-platform"></i>
        <span slot="title">开发页面</span>
      </el-menu-item>
      <el-menu-item index="/supplier/">
        <i class="el-icon-s-cooperation"></i>
        <span slot="title">供应商管理</span>
      </el-menu-item>
      <el-menu-item index="/goods/">
        <i class="el-icon-s-goods"></i>
        <span slot="title">商品管理</span>
      </el-menu-item>
      <el-menu-item index="/staff/">
        <i class="el-icon-user"></i>
        <span slot="title">员工管理</span>
      </el-menu-item>
      <el-menu-item index="/screenShow/">
        <i class="el-icon-s-platform"></i>
        <span slot="title">大屏展示</span>
      </el-menu-item>
      <el-menu-item index="/test/">
        <i class="el-icon-s-platform"></i>
        <span slot="title">测试页面</span>
      </el-menu-item>
      <a href="http://www.baidu.com" target="_blank">
        <el-menu-item>
          <i class="el-icon-s-platform"></i>
          <span slot="title" style="color: #FFFFFF;">百度首页</span>
        </el-menu-item>
      </a>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultActive: this.$route.path,
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
  /* 侧边栏样式 */
  .navbar {
    position: absolute;
    width: 230px;
    background-color: rgb(84, 92, 100);
    top: 50px;
    left: 0px;
    bottom: 0px;
    overflow-y: auto;
  }
  .el-menu {
    border-right: 0px;
  }

</style>
