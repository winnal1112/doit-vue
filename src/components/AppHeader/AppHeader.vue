<template>
  <div class="header">
    <a href="/">
      <img class="logo" src="../../assets/imgs/appLogo.png" width="25px" alt="">
      <span class="title">会员管理系统</span>
    </a>
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="a">修改密码</el-dropdown-item>
        <el-dropdown-item command="logout">退出系统</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
  import {userLogout} from '../../api/loginApi.js'
  export default {
    methods: {
      async handleCommand(command) {
        // 退出系统
        if (command === 'logout') {
          localStorage.removeItem('userInfo')
          this.$router.push('/login')
        }
      }
    }
  }
</script>

<style scoped>
  /* 头部样式 */
  .header {
    position: absolute;
    line-height: 50px;
    background-color: #000000;
    top: 0px;
    left: 0px;
    right: 0px;
  }
  /* logo样式 */
  .logo {
    vertical-align: middle;
    padding: 0px 10px 0px 40px;
  }
  /* 标题样式 */
  .title {
    position: absolute;
    color: #FFFFFF;
  }
  /* 下拉菜单 */
  .el-dropdown {
    float: right;
    margin-right: 40px;
    color: #FFFFFF;
    cursor: pointer;
  }
</style>
