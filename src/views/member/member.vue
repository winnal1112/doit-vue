<template>
  <div>
    <el-form :inline="true" :model="searchFormData" ref="searchFormData" class="demo-form-inline">
      <el-form-item label="会员号" prop="memberId">
        <el-input v-model="searchFormData.memberId" placeholder="会员号"></el-input>
      </el-form-item>
      <el-form-item label="会员名" prop="memberName">
        <el-input v-model="searchFormData.memberName" placeholder="会员名"></el-input>
      </el-form-item>
      <el-form-item label="支付类型" prop="payType">
        <el-select v-model="searchFormData.payType" clearable placeholder="支付类型">
          <el-option v-for="option in payTypeOptions" :label="option.name" :value="option.payType" :key="option.payType"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="getMemberList">查询</el-button>
        <el-button type="primary" @click="dialogFormVisible = true">新增</el-button>
        <el-button @click="resetForm('searchFormData')">重置</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="tableData"
      border
      max-height="700px"
      style="width: 100%;">
      <el-table-column type="index" :index="tableIndex" label="No." fixed width="80"></el-table-column>
      <el-table-column prop="memberName" label="会员名" fixed width="150"></el-table-column>
      <el-table-column prop="address" label="住址" width="300"></el-table-column>
      <el-table-column prop="phoneNum" label="手机号" width="120"></el-table-column>
      <el-table-column prop="grade" label="会员等级" width="120"></el-table-column>
      <el-table-column prop="money" label="余额" width="100"></el-table-column>
      <el-table-column prop="payType" label="支付类型" width="120">
        <template slot-scope="scope">
          {{scope.row.payType | formatPayType}}
        </template>
      </el-table-column>
      <el-table-column prop="birthday" label="出生日期" width="260"></el-table-column>
      <el-table-column prop="integral" label="积分" width=""></el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <el-button @click="editMember(scope.row.memberId)" type="success" size="small">编辑</el-button>
          <el-popconfirm
            confirm-button-text='确定'
            cancel-button-text='取消'
            icon="el-icon-info"
            @onConfirm="deleteMember(scope.row.memberId)"
            icon-color="red"
            title="确定删除这条信息吗？">
            <el-button slot="reference" type="danger" size="small">删除</el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="20"
        layout="prev, pager, next, jumper"
        :total="totalCount">
      </el-pagination>
      <el-dialog title="新增会员" :visible.sync="dialogFormVisible" :close-on-click-modal="false" @close="cancleDialog('addMemberForm')" width="500px">
        <el-form :model="memberInfo" ref="addMemberForm" :rules="rules" label-width="100px" label-position="right" style="width: 400px;">
          <el-form-item label="会员卡号" prop="memberId">
            <el-input v-model="memberInfo.memberId" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="会员名称" prop="memberName">
            <el-input v-model="memberInfo.memberName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="住址" prop="address">
            <el-input v-model="memberInfo.address" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="手机号" prop="phoneNum">
            <el-input v-model="memberInfo.phoneNum" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="出生日期" prop="birthday">
            <el-date-picker
                v-model="memberInfo.birthday"
                type="date"
                placeholder="出生日期">
              </el-date-picker>
          </el-form-item>
          <el-form-item label="支付类型" prop="payType">
            <el-select v-model="memberInfo.payType" clearable placeholder="支付类型">
              <el-option v-for="option in payTypeOptions" :label="option.name" :value="option.payType" :key="option.payType"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="会员等级" prop="grade">
            <el-input v-model="memberInfo.grade" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="初始金额" prop="money">
            <el-input v-model="memberInfo.money" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="初始积分" prop="integral">
            <el-input v-model="memberInfo.integral" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="cancleDialog('addMemberForm')">取 消</el-button>
          <el-button type="primary" @click="addMember('addMemberForm')">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  import { getMemberList } from '@/api/memberApi.js'
  import { standardDateToDate } from '@/assets/js/calculationFunction.js'
  import commonConfig from '@/assets/js/commonConfig.json'

  const payTypeOptions = [
    { payType: 1, name: '微信'},
    { payType: 2, name: '支付宝'},
    { payType: 3, name: '信用卡'},
    { payType: 4, name: '现金'}
  ]

  export default {
    data() {
      return {
        tableData: [],
        searchFormData: {
          memberId: null,
          memberName: null,
          payType: null
        },
        memberInfo: {
          memberId: null,
          memberName: null,
          address: null,
          phoneNum: null,
          birthday: null,
          payType: '',
          grade: 5,
          money: 0,
          integral: 0,
        },
        rules: {
          memberId: [
            { required: true, message: '请输入会员卡号', trigger: 'blur' }
          ],
          memberName: [
            { required: true, message: '请输入会员名称', trigger: 'blur' }
          ],
          address: [
            { required: true, message: '请输入住所', trigger: 'blur' }
          ],
          phoneNum: [
            { required: true, message: '请输入手机号', trigger: 'blur' }
          ],
          birthday: [
            { required: true, message: '请输入出生日期', trigger: 'blur' }
          ],
          payType: [
            { required: true, message: '请选择支付类型', trigger: 'blur' }
          ],
          grade: [
            { required: true, message: '请选择会员等级', trigger: 'blur' }
          ],
          money: [
            { required: true, message: '请输入初始金额', trigger: 'blur' }
          ],
          integral: [
            { required: true, message: '请输入初始积分', trigger: 'blur' }
          ]
        },
        currentPage: 1,
        totalCount: 0,
        limit: commonConfig.limit,
        payTypeOptions: payTypeOptions,
        dialogFormVisible: false
      }
    },
    computed: {
      // 表格当前页的起始索引
      tableIndex() {
         return (this.currentPage - 1) * this.limit + 1
      }
    },
    created() {
      // 获取会员一览
      this.getMemberList()
    },
    methods: {
      addMember(formName) {
        console.info(this.memberInfo.payType)
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.dialogFormVisible = false
            this.$refs[formName].resetFields()
          } else {
            return false
          }
        })
      },
      cancleDialog(formName) {
        this.$refs[formName].resetFields()
        this.dialogFormVisible = false
      },
      async getMemberList() {
        const params = {
          memberId: this.searchFormData.memberId,
          memberName: this.searchFormData.memberName,
          payType: this.searchFormData.payType,
          limit: this.limit,
          offset: (this.currentPage - 1) * this.limit
        }
        let memberList = await getMemberList(params)
        if (memberList) {
          // 为表格赋值数据
          console.info(memberList)
          this.formatData(memberList.list)
          // 总条数
          this.totalCount = memberList.totalCount
        }
      },
      editMember(memberId) {
        console.log(memberId)
      },
      deleteMember(memberId) {
        console.log(memberId)
      },
      formatData(data) {
        data.forEach( item => {
          item.birthday = standardDateToDate(new Date(item.birthday))
        })
        this.tableData = data
      },
      handleSizeChange() {
      },
      handleCurrentChange() {
        this.getMemberList()
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      }
    },
    filters: {
      formatPayType(payType) {
        const type = payTypeOptions.find( item => {
          return item.payType === payType
        })
        return type ? type.name : null
      }
    }
  }
</script>

<style scoped>
  /* 查询表单距离上侧距离 */
  .el-form {
    margin-top: 20px;
  }
  /* 分页位置 */
  .el-pagination {
    margin-top: 10px;
    text-align: right;
  }
</style>
