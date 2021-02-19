<template>
  <div class="container">
    <el-row class="header-nav">
      <div class="header-nav-list">
        <el-table :data="tableData">
          <el-table-column
            prop="name"
            label="名称"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="alexa"
            label="数量"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="country"
            label="国家"
            width="180"
          ></el-table-column>
          <el-table-column prop="url" label="地址"></el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button
                @click="handleClick(scope.row)"
                type="text"
                size="small"
                >编辑</el-button
              >
              <el-button type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-row>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <span>
        <el-form
          :label-position="labelPosition"
          label-width="80px"
          :model="formLabelAlign"
        >
          <el-form-item label="名称">
            <el-input v-model="formLabelAlign.name"></el-input>
          </el-form-item>
          <el-form-item label="数量">
            <el-input v-model="formLabelAlign.alexa"></el-input>
          </el-form-item>
          <el-form-item label="国家">
            <el-input v-model="formLabelAlign.country"></el-input>
          </el-form-item>
          <el-form-item label="地址">
            <el-input v-model="formLabelAlign.url"></el-input>
          </el-form-item>
        </el-form>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="updata">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Home from "./Home.vue";
export default {
  name: "index",
  components: { Home },
  data() {
    return {
      tableData: [],
      dialogVisible: false,
      labelPosition: "left",
      formLabelAlign: {
        name: "",
        alexa: "",
        country: "",
        url: "",
      },
    };
  },
  methods: {
    getData() {
      this.$axios.get("/getTest").then((res) => {
        this.tableData = res.data;
      });
    },
    handleClick(row) {
      console.log(row);
      this.dialogVisible = true;
      this.formLabelAlign = {
        name: row.name,
        alexa: row.alexa,
        country: row.country,
        url: row.url,
        id: row.id
      }
    },
    handleClose(){
      this.dialogVisible = false;
    },
    updata(){
      console.log(this.formLabelAlign);
      this.$axios.post('/upData', {
        name: this.formLabelAlign.name,
        alexa: this.formLabelAlign.alexa,
        country: this.formLabelAlign.country,
        url: this.formLabelAlign.url,
        id: this.formLabelAlign.id
      }).then(res => {
        console.log(res);
      })
    }
  },
  created: function () {
    this.getData();
  },
};
</script>

<style lang="scss">
.container {
  .header-nav {
    position: fixed;
    top: 5rem;
    width: 100%;
    border-top: 1px solid #c7c7c7;
    background-color: #fff;
    z-index: 1;
    .header-nav-list {
      margin: 0 auto;
      max-width: 1000px;
      display: flex;
      align-items: center;
      a {
        display: inline-block;
        padding: 6px 1.4rem;
        font-size: 1.2rem;
        &.active {
          color: #007fff;
        }
        &:hover {
          color: #007fff;
        }
      }
    }
  }
}

.content-view {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 10rem;
  justify-content: space-between;
  .content {
    position: relative;
    background: #fff;
    flex-grow: 1;
    font-size: 1.2rem;
  }
  .side {
    position: relative;
    width: 240px;
    margin-left: 20px;
  }
}
</style>