<template>
  <div class="main" :style="'width: 100%;height: 100%;'">
    <div class="top-info" ref='top-info' :style="'width: 100%;background-color: #aaaaaa;height: ' + screenHeight + 'px;'">
      111
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        screenHeight: document.documentElement.clientHeight
      }
    },
    watch: {
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
