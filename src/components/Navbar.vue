<template>
  <div id="navbar-wrapper">
    <div class="layout-menu-left">
      <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
        <router-link to="/home">
          <div class="layout-logo-left">客戶管理系統</div>
        </router-link>
        <Submenu name="employee-wrapper">
          <template slot="title">
            <Icon type="ios-navigate"></Icon>
            人員總表
          </template>
          <router-link to="/regist">
            <Menu-item name="1-1">人員註冊頁</Menu-item>
          </router-link>
          <router-link to="/employee">
            <Menu-item name="employee">人員清單</Menu-item>
          </router-link>
        </Submenu>
        <Submenu name="work-wraper">
          <template slot="title">
            <Icon type="ios-keypad"></Icon>
            人力分析
          </template>
          <router-link to="/performance">
            <Menu-item name="2-1">業績報表</Menu-item>
          </router-link>
          <router-link to="/workReport">
            <Menu-item name="2-2">工作進度</Menu-item>
          </router-link>
        </Submenu>
        <Submenu name="survey-wrapper">
          <template slot="title">
            <Icon type="ios-analytics"></Icon>
            人力調查
          </template>
          <router-link to="/career">
            <Menu-item name="3-1">職涯方向</Menu-item>
          </router-link>

          <router-link to="/feedback">
            <Menu-item name="3-2">意見反映</Menu-item>
          </router-link>
        </Submenu>
      </Menu>
    </div>
  </div>
</template>
<script>

</script>

<style scoped>
.layout-menu-left {
  background: #464c5b;
  height: 100vh;
  min-width: 150px;
}
.layout-logo-left {
  height: 40px;
  color: #ffffff;
  font-size: 20px;
  text-align: center;
  line-height: 40px;
  border-radius: 5px;
}
</style>
