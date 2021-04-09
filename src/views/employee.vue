<template>
  <div class="list-wrapper">
    <Table border :columns="columns1" :data="data1"></Table>
  </div>
</template>
<script>
export default {
  mounted() {
    this.getEmployeeList()
  },
  data() {
    return {
      columns1: [
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '性別',
          key: 'gender'
        },
        {
          title: '城市',
          key: 'city'
        },
        {
          title: '邮箱',
          key: 'mail'
        },
        {
          title: '登記日期',
          key: 'date'
        },
        {
          title: '登記時間',
          key: 'time'
        },
        {
          title: '興趣',
          key: 'interest'
        },
        {
          title: '介紹',
          key: 'desc'
        }

      ],
      data1: [
        // {
        //   name: '王小明',
        //   gender: 'male',
        //   city: '北京市朝阳区芍药居',
        //   mail: 'fdgs@gsf.com',
        //   date: '',
        //   time: 18,
        //   interest: [],
        //   desc: '123',
        // }, {
        //   name: '王小明',
        //   gender: 'male',
        //   city: '北京市朝阳区芍药居',
        //   mail: 'fdgs@gsf.com',
        //   date: '',
        //   time: 18,
        //   interest: [],
        //   desc: '123',
        // }
      ]
    }
  },
  methods: {
    getEmployeeList() {
      const employeeList = JSON.parse(localStorage.getItem('employeeList')) || []
      const newList = []
      employeeList.forEach(employer => {


        if (employer.interest.length === 1) {
          const styleInterest = `${employer.interest[0]}`
          const data = { ...employer, interest: styleInterest }

          newList.push(data)
          return

        } else if (employer.interest.length === 2) {
          const styleInterest = `${employer.interest[0]}、${employer.interest[1]}`
          const data = { ...employer, interest: styleInterest }

          newList.push(data)
          return
        }

      });
      this.data1 = newList
    }
  }
}
</script>

<style scoped>
.list-wrapper {
  margin: 30px;
}
</style>
