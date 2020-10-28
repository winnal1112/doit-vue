<template>
  <div class="main" :style="'width: 1200px;height: 100%;'">
    <div class="top-info" ref='top-info' :style="'width: 1200px;background-color: red;height: 50px'">
      111
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        screenWidth: document.documentElement.clientWidth
      }
    },
    watch: {
      screenWidth () {
        this.$refs[top-info].style.width = screenWidth + 'px'
        console.info(screenWidth)
      }
    },
    created() {
      console.info(this.$refs)
    },
    methods: {
    }
  }
</script>

<style>
</style>
