<template>
  <div style="width: 100%;height: 100%;">
    <div style="width: 700px;height: 100%;border: 1px solid #808080;">
      <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
        <el-row>
          <el-form-item
            v-for="(domain, index) in dynamicValidateForm.domains"
            :label="'域名' + index"
            :key="domain.key"
            :prop="'domains.' + index + '.value'"
            :rules="{
              required: true, message: '域名不能为空', trigger: 'blur'
            }"
            style="text-align: left;"
          >
            <el-input style="width: 200px;" v-model="domain.value"></el-input>&nbsp;&nbsp;&nbsp;
            <el-button v-if="index === 0" disabled="">上移</el-button>
            <el-button v-if="index !== 0" @click.prevent="moveUp(domain)">上移</el-button>
            <el-button v-if="index === dynamicValidateForm.domains.length - 1" disabled="">下移</el-button>
            <el-button v-if="index !== dynamicValidateForm.domains.length - 1" @click.prevent="moveDown(domain)">下移</el-button>
            <el-button @click.prevent="removeDomain(domain)">删除</el-button>
          </el-form-item>
        </el-row>
        <el-form-item style="text-align: left;">
          <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
          <el-button @click="addDomain">新增域名</el-button>
          <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dynamicValidateForm: {
          domains: [
            {
              value: '11111',
              key: 1
            },
            {
              value: '22222',
              key: 2
            },
            {
              value: '33333',
              key: 3
            }
          ]
        }
      }
    },
    methods: {
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
        var index = this.dynamicValidateForm.domains.indexOf(item)
        if (index !== -1) {
          this.dynamicValidateForm.domains.splice(index, 1)
        }
      },
      // 上移
      moveUp(item) {
        var index = this.dynamicValidateForm.domains.indexOf(item)
        if (index !== -1 && index - 1 >= 0) {
          // 调换数组的值
          this.dynamicValidateForm.domains[index] = this.dynamicValidateForm.domains[index - 1]
          this.dynamicValidateForm.domains[index - 1] = item
          // vue可以监听到splice()方法，触发vue更新数据
          this.dynamicValidateForm.domains.splice(index, 0)
        }
      },
      // 下移
      moveDown(item) {
        var index = this.dynamicValidateForm.domains.indexOf(item)
        if (index !== -1 && index + 1 < this.dynamicValidateForm.domains.length) {
          // 调换数组的值
          this.dynamicValidateForm.domains[index] = this.dynamicValidateForm.domains[index + 1]
          this.dynamicValidateForm.domains[index + 1] = item
          // vue可以监听到splice()方法，触发vue更新数据
          this.dynamicValidateForm.domains.splice(index, 0)
        }
      },
      // 添加
      addDomain() {
        this.dynamicValidateForm.domains.push({
          value: '',
          key: Date.now()
        })
      }
    }
  }
</script>

<style>
  .demo-dynamic {
  }
</style>
