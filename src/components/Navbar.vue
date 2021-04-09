<template>
  <div id="navbar-wrapper">
    <div class="layout-menu-left">
      <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
        <router-link to="/home">
          <div class="layout-logo-left">員工管理後台</div>
        </router-link>
        <Submenu name="employee-wrapper">
          <template slot="title">
            <Icon type="ios-navigate"></Icon>
            人員總表
          </template>
          <router-link to="/regist">
            <Menu-item name="1-1">人員註冊</Menu-item>
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
          <router-link to="/renderFeedback">
            <Menu-item name="3-1">反饋紀錄</Menu-item>
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
export default {
  mounted() {
    this.setＥmployeeListData()
  },
  data() {
    return {
      employeeList: [
        {
          name: "王小明",
          mail: "tet@example.com",
          city: "上海",
          gender: "male",
          interest: ["跑步", "吃饭"],
          date: "2021-04-14T16:00:00.000Z",
          time: "",
          desc: "王小明 興趣跑步"
        },
        {
          name: "王小方",
          mail: "tetee@example.com",
          city: "北京",
          gender: "female",
          interest: ["跑步", "睡觉"],
          date: "2021 - 04 - 30T16: 00: 00.000Z",
          time: "",
          desc: "王小方 興趣跑步"
        },
        {
          name: "李小瑱",
          mail: "test@gmail.com",
          city: "北京",
          gender: "female",
          interest: ["吃饭"],
          date: "2021 - 04 - 14T16: 00: 00.000Z",
          time: "",
          desc: "hihiihhihiih"
        },
        {
          name: "蔡小美", "mail": "tesy@test.com",
          city: "上海", "gender": "female", "interest": ["睡觉"],
          date: "2021 - 04 - 14T16: 00: 00.000Z",
          time: "00: 02: 00",
          desc: "hi  蔡小美"
        }]
    }
  },
  methods: {
    setＥmployeeListData() {
      console.log('setData')
      const employeeList = JSON.parse(localStorage.getItem('employeeList')) || []
      if (employeeList.length === 0) {
        localStorage.setItem('employeeList', JSON.stringify(this.employeeList))
      }
    }
  }

}

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
