<template>
  <div style="overflow: hidden;">
    <div class="slider" style="overflow: hidden;">
      <div ref="context" id="context" class="context">
        <p>阿萨大大大萨阿萨</p>
        <p>阿达萨达萨达顶顶</p>
      </div>
      <div ref="ctlbtn" id="" class="ctlbtn">
        <p ref="ctlInfo" @click="handleOpen">{{btnContext}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isOpen: true,
        btnContext: '展开'
      }
    },
    methods: {
      handleOpen() {
        console.info(this.$refs.ctlInfo.innerText)
        if (this.isOpen) {
          this.$refs.context.style.left = '200px'
          this.$refs.ctlbtn.style.left = '400px'
          this.btnContext = '收起'
          this.isOpen = false
        } else {
          this.$refs.context.style.left = '0px'
          this.$refs.ctlbtn.style.left = '200px'
          this.btnContext = '展开'
          this.isOpen = true
        }
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  .container {
    position: absolute;
  }
  .context {
    position: fixed;
    top: 50px;
    left: 0px;
    width: 200px;
    height: 700px;
    background-color: #42B983;
    transition: all 1s;
  }
  .ctlbtn {
    position: fixed;
    top: 100px;
    left: 200px;
    width: 30px;
    height: 80px;
    background-color: #42B983;
    cursor: pointer;
    transition: all 1s;
  }
  #volet_clos {
    position: fixed;
    top: 0px;
    left: 0;
    width: 200px;
  }
  #volet {
    width: 250px;
    padding: 10px;
    background: #6B9A49;
    color: #fff;
    width: 100%;
    height: 800px;
  }
  /* 初始定位 */
  #volet {
    position: absolute;
    left: 0px;
    top: 50px;
    transition: all .5s ease-in;
  }
  #volet a.out,#volet a.in {
    position: absolute;
    right: -88px;
    top: 150px;
  }
  /* 点击过后改变 target  */
  #volet a.in {
    display: none;
  }
  #volet:target {
    left: 0px;
    top: 150px;
  }
  #volet:target a.in {
    display: block;
  }
  #volet:target a.out {
    display: none;
  }
  #volet_clos:target #volet {
    left: 0px;
    top: 375px;
  }
  #volet a.out,#volet a.in{
    position: absolute;
    right: calc(40%);
    top: -40px;
    padding: 10px 25px;
    background: #555;
    color: #fff;
    text-decoration: none;
    text-align: center;
    width: 120px;
  }
</style>
