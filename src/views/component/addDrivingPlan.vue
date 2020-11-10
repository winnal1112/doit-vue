<template>
  <div style="width: 100%;height: 100%;">
    <div style="width: 700px;height: 100%;border: 1px solid #808080;">
      <el-form :model="formData" ref="formData" label-width="100px" class="demo-dynamic">
        <el-row>
          <el-form-item v-for="(domain, index) in formData.domains"  style="text-align: left;" :label="'序号' + index" :key="index" :prop="'domains.' + index + '.value'" :rules="{ required: true, message: '域名不能为空', trigger: 'blur' }">
            <!-- domain.status为true时代表当前行为编辑或新增状态 -->
            <!-- 内容 -->
            <span v-show="!domain.status">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{domain.value}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <!-- 编辑按钮 -->
            <el-button v-show="!domain.status" @click="edit(domain)">编辑</el-button>
            <!-- 删除按钮 -->
            <el-button v-show="!domain.status" @click.prevent="removeDomain(domain)">删除</el-button>
            <!-- 上移按钮-第一个禁用 -->
            <el-button v-show="!domain.status && index === 0" disabled="">上移</el-button>
            <!-- 上移按钮-非第一个 -->
            <el-button v-show="!domain.status && index !== 0" @click.prevent="moveUp(domain)">上移</el-button>
            <!-- 下移按钮-最后一个禁用 -->
            <el-button v-show="!domain.status && index === formData.domains.length - 1 " disabled="">下移</el-button>
            <!-- 下移按钮-非最后一个 -->
            <el-button v-show="!domain.status && index !== formData.domains.length - 1 " @click.prevent="moveDown(domain)">下移</el-button>
            <!-- 内容 -->
            <el-input v-show="domain.status" style="width: 200px;" v-model="domain.value"></el-input>
            <!-- 确定路线-当前行处于编辑或新增时,显示确定路线按钮 -->
            <el-button v-show="domain.status" @click="confirmAdd('formData', domain)">确定路线</el-button>
            <!-- 取消按钮-editFlag为true代表当前行处于编辑状态,取消按钮调用cancel()方法取消编辑状态 -->
            <el-button v-show="editFlag && domain.status" @click.prevent="cancel(domain)">取消</el-button>
            <!-- 取消按钮-addLastFlag为true代表当前行处于新增状态,且最后一个时,取消按钮调用removeDomain()方法 -->
            <el-button v-show="addLastFlag && domain.status && index === formData.domains.length - 1" @click.prevent="removeDomain(domain)">取消</el-button>
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
              key: 1,
              status: false
            },
            {
              value: '配送先2',
              key: 2,
              status: false
            },
            {
              value: '配送先3',
              key: 3,
              status: false
            }
          ],
        },
        editFlag: false,
        editContext: '',
        addLastFlag: false
      }
    },
    methods: {
      // 取消编辑
      cancel(item) {
        item.status = false
        this.editFlag = false
        item.value = this.editContext
      },
      // 编辑
      edit(item) {
        if (this.addLastFlag) {
          alert('请先确定追加项！')
        } else {
          item.status = true
          this.editFlag = true
          this.editContext = item.value
        }
      },
      // 确认添加
      confirmAdd(formName, item) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            item.status = false
            this.addLastFlag = false
            this.editFlag = false
          } else {
            return false
          }
        })
      },
      // 提交form
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
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
          this.addLastFlag = false
          this.formData.domains.splice(index, 1)
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
        if (this.addLastFlag) {
          alert('请先确定追加项！')
        } else if (this.editFlag) {
          alert('请先确定编辑项！')
        } else {
          this.addLastFlag = true
          this.formData.domains.push({
            value: '',
            key: Date.now(),
            status: true
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
