<template>
  <div style="background: #eee; padding: 20px">
    <div v-for="project in projects" :key="project.projectId">
      <Card :bordered="false" class="card">
        <h1 slot="title">{{ project.projectTitle }}</h1>
        <p>{{ project.projectDescription }}</p>
        <p>協作人員: {{ project.teamMember }}</p>
        <p class="project-progress">完成率</p>

        <div>
          <Progress
            :percent="project.progressPercent"
            v-model="project.progressPercent"
          ></Progress>
          <Button-group size="large">
            <Button icon="ios-plus-empty" @click="add(project.projectId)"
              ><p>+</p></Button
            >
            <Button icon="ios-minus-empty" @click="minus(project.projectId)"
              ><p>-</p></Button
            >
          </Button-group>
        </div>
      </Card>
    </div>
  </div>
</template>
<script>

export default {
  mounted() {
    this.fetchProjectsData()
  },
  data() {
    return {
      projects: [
        {
          projectId: 1,
          projectTitle: 'Ａ商品市場調查報告',
          projectDescription: '2021年第一季銷售額，競業分析，廣告預算轉化成本......等。',
          progressPercent: 0,
          teamMember: ['王小明', '李小瑱'],
        },
        {
          projectId: 2,
          projectTitle: 'B商品開發進度',
          projectDescription: '新品研發',
          progressPercent: 40,
          teamMember: ['蔡小美', '王小方'],
        }
      ]
    }
  },
  methods: {
    fetchProjectsData() {

      const projectList = JSON.parse(localStorage.getItem('projectList')) || []
      if (projectList.length === 0) {
        localStorage.setItem('projectList', JSON.stringify(this.projects))
      }
      this.projects = [...projectList]
    },
    add(projectId) {
      const newList = []
      this.projects.forEach((proj) => {
        if (proj.projectId === projectId) {

          if (proj.progressPercent >= 100) {
            return
          }

          const newprogressPercent = proj.progressPercent += 10
          const data = {
            ...proj,
            progressPercent: newprogressPercent
          }

          newList.push(data)
        } else {
          return newList.push(proj)
        }
      })
      localStorage.setItem('projectList', JSON.stringify(newList))

    },
    minus(projectId) {
      // console.log('minus', projectId)
      const newList = []
      this.projects.forEach((proj) => {
        if (proj.projectId === projectId) {

          if (proj.progressPercent <= 0) {
            return
          }

          const newprogressPercent = proj.progressPercent -= 10;
          const data = {
            ...proj,
            progressPercent: newprogressPercent
          }

          newList.push(data)

        } else {
          return newList.push(proj)
        }
      })
      localStorage.setItem('projectList', JSON.stringify(newList))

    }
  }
}
</script>

<style scoped>
p {
  text-align: center;
}
.card {
  margin: 20px;
}
h1 {
  text-align: center;
}
.project-progress {
  margin: 10px;
  font-size: 20px;
}
</style>