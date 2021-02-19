<template>
  <div id="container-view">
    <header class="header">
      <el-row class="header-view">
        <el-col :sm="4" :xs="6">
          <a href="###">
            <img src="./assets/index/logo.svg" alt="社区" />
          </a>
        </el-col>
        <el-col :sm="9" :offset="1" class="nav">
          <router-link to="/">首页</router-link>
          <router-link to="/hot">表格</router-link>
          <router-link to="/topic">话题</router-link>
          <router-link to="/active">活动</router-link>
        </el-col>
        <el-col :sm="6" :offset="2">搜索</el-col>
      </el-row>
    </header>
    <router-view></router-view>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>-->
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss">
#container-view {
  position: relative;
  .header {
    position: fixed;
    background-color: #ffffff;
    width: 100%;
    z-index: 1;
    .header-view {
      display: flex;
      align-items: center;
      margin: 0 auto;
      max-width: 1000px;
      .nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 5rem;
        a {
          display: block;
          font-size: 1.4rem;
          height: 100%;
          padding: 0 1rem;
          line-height: 5rem;
          &:hover {
            color: #007fff;
          }
        }
      }
    }
  }
}

.router-link-exact-active {
  color: #71777c;
  &.router-link-active {
    color: #007fff;
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
