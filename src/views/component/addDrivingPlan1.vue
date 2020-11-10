<template>
  <div style="width: 100%;height: 100%;">
    <div style="width: 700px;height: 100%;border: 1px solid #808080;">
      <el-form :model="formData" ref="formData" label-width="100px" class="demo-dynamic">
        <el-row>
          <el-form-item v-for="(domain, index) in formData.domains"  style="text-align: left;" :label="'序号' + index" :key="index" :prop="'domains.' + index + '.value'" :rules="{ required: true, message: '域名不能为空', trigger: 'blur' }">
            <!-- 用lastFlag来判断是否存在追加项，true存在，false不存在 -->
            <!-- 控制配送先内容 -->
            <!-- 位置不在最后一个 -->
            <span style="width: 200px;" v-if="index !== formData.domains.length - 1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{domain.value}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <!-- 位置在最后一个，但不是新追加项 -->
            <span v-if="index === formData.domains.length - 1 && !lastFlag">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{domain.value}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <!-- 位置在最后一个，且是新追加项 -->
            <el-input v-if="index === formData.domains.length - 1 && lastFlag" style="width: 200px;" v-model="domain.value"></el-input>
            <!-- 上移按钮控制 -->
            <!-- 位置在第一个时，禁止上移 -->
            <el-button v-if="index === 0" disabled="">上移</el-button>
            <!-- 位置不在第一个，且不在最后一个 -->
            <el-button v-if="index !== 0 && index !== formData.domains.length - 1" @click.prevent="moveUp(domain)">上移</el-button>
            <!-- 位置在最后一个，但不是新追加行 -->
            <el-button v-if="index === formData.domains.length - 1 && !lastFlag" @click.prevent="moveUp(domain)">上移</el-button>
            <!-- 位置在最后一个，且是新追加行，确认添加 -->
            <el-button v-if="index === formData.domains.length - 1 && lastFlag" @click.prevent="confirmAdd('formData')">确认添加</el-button>
            <!-- 下移按钮控制 -->
            <!-- 位置不在最后一个 -->
            <el-button v-if="index !== formData.domains.length - 1 " @click.prevent="moveDown(domain)">下移</el-button>
            <!-- 位置在最后一个，但不是新追加行,禁止下移 -->
            <el-button v-if="index === formData.domains.length - 1 && !lastFlag" disabled="">下移</el-button>
            <!-- 位置在最后一个，且是新追加行，取消 -->
            <el-button v-if="index === formData.domains.length - 1 && lastFlag" @click.prevent="removeDomain(domain)">取消</el-button>
            <!-- 删除按钮控制 -->
            <!-- 位置不在最后一个或者位置在最后一个，但不是新追加行 -->
            <el-button v-if="index !== formData.domains.length - 1 || (index === formData.domains.length - 1 && !lastFlag)" @click.prevent="removeDomain(domain)">删除</el-button>
          </el-form-item>
        </el-row>
        <el-form-item style="text-align: left;">
          <!-- <el-button type="primary" @click="submitForm('formData')">提交</el-button> -->
          <el-button @click="addDomain">新增配送</el-button>
          <!-- <el-button @click="resetForm('formData')">重置</el-button> -->
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        formData: {
          domains: [
            {
              value: '配送先1',
              key: 1
            },
            {
              value: '配送先2',
              key: 2
            },
            {
              value: '配送先3',
              key: 3
            }
          ]
        },
        lastFlag: false
      }
    },
    methods: {
      // 确认添加
      confirmAdd(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.lastFlag = false
          } else {
            return false
          }
        })
      },
      cancel() {
        this.lastFlag = false
      },
      // 提交form
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      // 重置form
      resetForm(formName) {
        this.$refs[formName].resetFields()
      },
      // 移除
      removeDomain(item) {
        var index = this.formData.domains.indexOf(item)
        if (index !== -1) {
          this.formData.domains.splice(index, 1)
          this.lastFlag = false
        }
      },
      // 上移
      moveUp(item) {
        var index = this.formData.domains.indexOf(item)
        if (index !== -1 && index - 1 >= 0) {
          // 调换数组的值
          this.formData.domains[index] = this.formData.domains[index - 1]
          this.formData.domains[index - 1] = item
          // vue可以监听到splice()方法，触发vue更新数据
          this.formData.domains.splice(index, 0)
        }
      },
      // 下移
      moveDown(item) {
        var index = this.formData.domains.indexOf(item)
        if (index !== -1 && index + 1 < this.formData.domains.length) {
          // 调换数组的值
          this.formData.domains[index] = this.formData.domains[index + 1]
          this.formData.domains[index + 1] = item
          // vue可以监听到splice()方法，触发vue更新数据
          this.formData.domains.splice(index, 0)
        }
      },
      // 添加
      addDomain() {
        if (this.lastFlag) {
          alert('请先确定追加项！')
        } else {
          this.lastFlag = true
          this.formData.domains.push({
            value: '',
            key: Date.now()
          })
        }
      }
    }
  }
</script>

<style>
  .demo-dynamic {
  }
</style>
