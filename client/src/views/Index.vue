<template>
  <div class="container">
    <el-row class="header-nav">
      <div class="header-nav-list">
        <router-link to="{name: 'all', params: {id: 0}}">全部</router-link>
        <router-link to="{name: 'all', params: {id: 1}}">前端</router-link>
      </div>
    </el-row>
    <el-row type="flex" class="content-view">
      <div class="content">
        <router-view></router-view>
      </div>
      <aside class="side">侧边栏</aside>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "index",
  components: {}
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
      height: 3.833rem;
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