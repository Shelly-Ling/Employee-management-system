<template>
  <div class="main">
    <h1 class="title">人員註冊</h1>
    <div>
      <Form
        ref="formValidate"
        :model="formValidate"
        :rules="ruleValidate"
        :label-width="80"
      >
        <Form-item label="姓名" prop="name">
          <Input v-model="formValidate.name" placeholder="请输入姓名"></Input>
        </Form-item>
        <Form-item label="邮箱" prop="mail">
          <Input v-model="formValidate.mail" placeholder="请输入邮箱"></Input>
        </Form-item>
        <Form-item label="城市" prop="city">
          <Select v-model="formValidate.city" placeholder="请选择所在地">
            <Option value="beijing">北京市</Option>
            <Option value="shanghai">上海市</Option>
            <Option value="shenzhen">深圳市</Option>
            <Option value="shenzhen">杭州市</Option>
            <Option value="shenzhen">南京市</Option>
            <Option value="shenzhen">重庆市</Option>
          </Select>
        </Form-item>
        <Form-item label="到職日期">
          <Row>
            <Col span="11">
              <Form-item prop="date">
                <Date-picker
                  type="date"
                  placeholder="選擇日期"
                  v-model="formValidate.date"
                ></Date-picker>
              </Form-item>
            </Col>
            <Col span="2" style="text-align: center">-</Col>
            <Col span="11">
              <Form-item>
                <Time-picker
                  type="time"
                  placeholder="选择时间"
                  v-model="formValidate.time"
                ></Time-picker>
              </Form-item>
            </Col>
          </Row>
        </Form-item>
        <Form-item label="性别" prop="gender">
          <Radio-group v-model="formValidate.gender">
            <Radio label="male">男</Radio>
            <Radio label="female">女</Radio>
          </Radio-group>
        </Form-item>
        <Form-item label="爱好" prop="interest">
          <Checkbox-group v-model="formValidate.interest">
            <Checkbox label="吃饭"></Checkbox>
            <Checkbox label="睡觉"></Checkbox>
            <Checkbox label="跑步"></Checkbox>
            <Checkbox label="看电影"></Checkbox>
          </Checkbox-group>
        </Form-item>
        <Form-item label="介绍" prop="desc">
          <Input
            v-model="formValidate.desc"
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 5 }"
            placeholder="请输入..."
          ></Input>
        </Form-item>
        <Form-item>
          <Button @click="handleSubmit('formValidate')">提交</Button>
          <Button
            class="reset-btn"
            @click="handleReset('formValidate')"
            style="margin-left: 8px"
            >重置</Button
          >
        </Form-item>
      </Form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formValidate: {
        name: '',
        mail: '',
        city: '',
        gender: '',
        interest: [],
        date: '',
        time: '',
        desc: ''
      },
      ruleValidate: {
        name: [
          { required: true, message: '姓名不能为空' }
        ],
        mail: [
          { required: true, message: '邮箱不能为空' },
          { type: 'email', message: '邮箱格式不正确' }
        ],
        city: [
          { required: true, message: '请选择城市' }
        ],
        gender: [
          { required: true, message: '请选择性别' }
        ],
        interest: [
          { required: true, type: 'array', min: 1, message: '至少选择一个爱好' },
          { type: 'array', max: 2, message: '最多选择两个爱好' }
        ],
        date: [
          { required: true, type: 'date', message: '请选择日期' }
        ],
        time: [
          { required: true, type: 'time', message: '请选择时间' }
        ],
        desc: [
          { required: true, message: '请输入个人介绍' },
          { type: 'string', min: 5, message: '介绍不能少于5字' }
        ]
      }
    }
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('提交成功!');

          const data = { ...this.formValidate }
          const employeeList = JSON.parse(localStorage.getItem('employeeList')) || []
          employeeList.push(data)
          localStorage.setItem('employeeList', JSON.stringify(employeeList))

        } else {
          this.$Message.error('表单验证失败!');
        }
      })
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    }
  }
}
</script>

<style scoped>
.reset-btn {
  color: #525b6e;
}
.main {
  margin: 30px 30px 0 0;
}
.title {
  margin: 30px;
}
</style>