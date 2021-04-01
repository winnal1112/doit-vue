<template>
  <div>
    <app-header></app-header>
    <app-navbar></app-navbar>
    <app-main></app-main>
  </div>
</template>

<script>
import AppHeader from './AppHeader/AppHeader.vue'
import AppMain from './AppMain/AppMain.vue'
import AppNavbar from './AppNavbar/AppNavbar.vue'
export default {
  components: {AppHeader, AppMain, AppNavbar}
}
</script>

<style>
</style>
