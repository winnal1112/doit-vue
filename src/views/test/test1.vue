<template>
  <div style="height: 969px;">
    <div class="left" ref="left" style="background-color: #3ccec9;width: 400px;height: 969px;">
      啊啊
    </div>
    <div ref="ctlbtn" id="" class="ctlbtn">
      <p ref="ctlInfo" @click="handleOpenClose">{{btnContext}}</p>
    </div>
    <div class="right" ref="right" style="width: 1520px;height: 969px;background-color: #FFFFFF;">
      啊啊水水水水申诉申诉
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isOpen: true,
        btnContext: '收起'
      }
    },
    methods: {
      handleOpenClose() {
        console.info(this.$refs.left)
        if (this.isOpen) {
          this.$refs.left.style.left = '-400px'
          this.$refs.right.style.left = '0px'
          this.$refs.right.style.width = '1920px'
          this.$refs.ctlbtn.style.left = '0px'
          this.btnContext = '展开'
          this.isOpen = false
        } else {
          this.$refs.left.style.left = '0px'
          this.$refs.right.style.left = '400px'
          this.$refs.right.style.width = '1520px'
          this.$refs.ctlbtn.style.left = '400px'
          this.btnContext = '收起'
          this.isOpen = true
        }
      }
    }
  }
</script>

<style>
  /* 左侧窗体 */
  .left {
    left: 0px;
    position: fixed;
    transition: all 1s;
  }
  /* 右侧窗体 */
  .right {
    position: fixed;
    left: 400px;
    transition: all 1s;
  }
  /* 收起/关闭 控制按钮 */
  .ctlbtn {
    position: fixed;
    top: 400px;
    left: 400px;
    width: 30px;
    height: 80px;
    background-color: #7fb914;
    cursor: pointer;
    z-index: 2;
    transition: all 1s;
  }
</style>
