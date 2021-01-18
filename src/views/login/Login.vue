<template>
  <div class="login-page" ref="login-page">
    <el-button type="primary" class="login-btn" @click="login">登录</el-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    watch: {
    },
    created() {
    },
    methods: {
      login(){
        this.$router.push('home')
      },
    }
  }
</script>

<style>
  .login-btn {
    width: 200px;
    margin-top: 100px;
  }
</style>
