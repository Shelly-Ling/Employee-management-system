
<template>
  <div>
    <h1 id="performance-page" class="title">業績報表</h1>
    <div class="card-list">
      <div
        class="performance-card"
        v-for="employee in employeePerformance"
        :key="employee.id"
      >
        <h1 class="employee-name">員工:{{ employee.name }}</h1>
        <i-circle
          class="circle"
          :size="250"
          :trail-width="4"
          :stroke-width="5"
          :percent="employee.completionRate"
          stroke-linecap="square"
          stroke-color="#43a3fb"
        >
          <div class="demo-i-circle-custom">
            <h1>{{ employee.performance }}</h1>
            <p>個人業績總額</p>
            <span>
              達成率
              <i>{{ employee.completionRate }}%</i>
            </span>
          </div>
        </i-circle>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      employeePerformance: [
        {
          id: 1,
          name: '王小明',
          performance: '225,000',
          completionRate: 70,
        },
        {
          id: 2,
          name: '王小方',
          performance: '105,000',
          completionRate: 60,
        },
        {
          id: 3,
          name: '李小瑱',
          performance: '25,000',
          completionRate: 30,
        },
        {
          id: 4,
          name: '蔡小美',
          performance: '150,000',
          completionRate: 50,
        }
      ]
    }
  }

}
</script>

<style >
.title {
  font-size: 30px;
  margin: 20px 0px 10px 30px;
}
.circle {
  margin-top: 30px;
}
.performance-card {
  border: 5px solid #dadada;
  border-radius: 30px;
  display: inline-block;
  margin: 10px;
  padding: 30px;
}
.demo-i-circle-custom h1 {
  margin: 20px;
  color: #3f414d;
  font-size: 28px;
  font-weight: normal;
}
.demo-i-circle-custom p {
  color: #657180;
  font-size: 14px;
  margin: 10px 0 15px;
}
.demo-i-circle-custom span {
  display: block;
  padding-top: 15px;
  color: #657180;
  font-size: 14px;
}
.demo-i-circle-custom span:before {
  content: "";
  display: block;
  width: 50px;
  height: 1px;
  margin: 0 auto;
  background: #e0e3e6;
  position: relative;
  top: -15px;
}
.demo-i-circle-custom span i {
  font-style: normal;
  color: #3f414d;
}
</style>
