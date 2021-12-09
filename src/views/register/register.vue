<template>
  <div class="login-page" ref="login-page">
    <div class="login-form">
      <h2 class="login-title">系统注册</h2><br>
      <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="60px">
        <el-form-item label="账号" prop="userId">
          <el-input v-model="loginForm.userId" placeholder="请输入手机号或邮箱"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password" type='password' placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login('loginForm')">提交注册</el-button>
          <el-button @click="goLogin()">返回登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script src="./register.js"></script>

<style scoped>
  .login-page {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(../../assets/imgs/background.jpg);
    background-size: 100% 100%;
  }
  .login-btn {
    width: 200px;
    margin-top: 100px;
  }
  .login-form {
    width: 350px;
    background-color: rgba(234, 234, 234, 0.7);
    margin: 260px auto;
    padding: 40px;
    border-radius: 10px;
  }
  .login-title {
    text-align: center;
  }
</style>
