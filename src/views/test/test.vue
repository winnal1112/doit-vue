<template>
  <div>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }]
      }
    },
    methods: {
    }
  }
</script>

<style>
  /* 调整表格-表头复选框与表格内复选框不对齐 */
  .el-table th > .cell {
    padding-left: 14px;
  }
  /* 调整表格鼠标悬停时，当前行的高亮颜色 */
  .el-table__body tr:hover > td{
    background-color: #55ff00 !important;
  }
  .el-table__body tr.current-row > td{
    background-color: #55ff00 !important;
  }
</style>
