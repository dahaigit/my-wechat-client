<template>
  <div id="app">
    <img src="static/imgs/tx.jpeg" class="head_img" alt="">
    <label class="username" v-on:click="getTasks">刘备</label>
    <el-table
      :data="tasks"
      style="width: 90%;margin: 0 auto;" >
      <el-table-column
        prop="name"
        label="任务"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="详情">
      </el-table-column>
    </el-table>
    <el-pagination
      small
      layout="prev, pager, next"
      :total='50'
      :current-page='1'
      >
    </el-pagination>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        tasks: [{
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
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    computed:{

    },
    methods:
    {
        getTasks() {
          this.$http.get('api/tasks').then(response => {
            console.log(response)
          })
        }
    }
  }
</script>

<style>
  .head_img {
    width: 6rem;
    height: 6rem;
    border-redius: 3rem;
  }
  .username {
    display: block;
  }

  .el-row {
    margin-bottom: 20rem;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4rem;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4rem;
    min-height: 36rem;
  }
  .row-bg {
    padding: 10rem 0;
    background-color: #f9fafc;
  }
</style>
