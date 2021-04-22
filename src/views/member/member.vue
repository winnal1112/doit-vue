<template>
  <div>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column type="index" label="No." fixed align="center"></el-table-column>
      <el-table-column prop="memberName" label="会员名" fixed width="150"> </el-table-column>
      <el-table-column prop="address" label="住址" width="120"> </el-table-column>
      <el-table-column prop="phoneNum" label="手机号" width="120"> </el-table-column>
      <el-table-column prop="level" label="会员等级" width="120"> </el-table-column>
      <el-table-column prop="money" label="余额" width="100"> </el-table-column>
      <el-table-column prop="payType" label="支付类型" width="120"> </el-table-column>
      <el-table-column prop="birthday" label="出生日期" width="260"> </el-table-column>
      <el-table-column prop="integral" label="积分" width="120"> </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button @click="editMember(scope.row.memberId)" type="text" size="small">编辑</el-button>
          <el-button @click="deleteMember(scope.row.memberId)" type="text" size="small">删除</el-button>
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
    </div>
  </div>
</template>

<script>
  import { getMemberList } from '@/api/memberApi.js'
  export default {
    data() {
      return {
        tableData: [],
        currentPage: 1,
        totalCount: 0
      }
    },
    created() {
      // 获取会员一览
      this.getMemberList()
    },
    methods: {
      async getMemberList() {
        let memberList = await getMemberList()
        console.log(memberList)
        if (memberList) {
          // 为表格赋值数据
          this.formatData(memberList)
          // 总条数
          this.totalCount = memberList.length
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
          item.birthday = new Date(item.birthday).getTime()
        })
        this.tableData = data
      },
      handleSizeChange() {
      },
      handleCurrentChange() {
        console.log(this.currentPage)
      },
    }
  }
</script>

<style scoped>
  /* 表格距离上侧距离 */
  .el-table {
    margin-top: 20px;
  }
  /* 分页位置 */
  .el-pagination {
    margin-top: 10px;
    text-align: right;
  }
</style>
