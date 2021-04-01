<template>
  <div class="main">
    <app-link v-show="$route.path !== '/home'"></app-link>
    <router-view></router-view>
  </div>
</template>

<script>
</script>

<style scoped>
  .main {
    position: absolute;
    top: 50px;
    left: 230px;
    padding: 10px;
    overflow-y: auto;
    right: 0px;
    bottom: 0px;
  }
</style>

<script>
  import AppLink from './components/AppLink.vue'
  export default {
    components: {AppLink}
  }
</script>
