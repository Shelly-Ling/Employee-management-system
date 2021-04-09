<template>
  <div>
    <h1 class="title">意見反映</h1>
    <div calss="form-wrapper">
      <Form ref="formData" :rules="textContent">
        <Form-item label="姓名" prop="text" class="name">
          <Input
            class="input-area"
            v-model="formData.name"
            type="text"
            placeholder="请输入姓名"
          ></Input>
        </Form-item>
        <Form-item label="反映內容" prop="content" class="feedback-content">
          <Input
            class="input-area"
            v-model="formData.feedback"
            type="textarea"
            :rows="4"
            placeholder="请输入..."
          ></Input>
        </Form-item>
        <Button
          class="submit-btn"
          type="primary"
          @click.prevent="handleSubmit()"
        >
          提交
        </Button>
      </Form>
      <div></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        feedback: '',
      },
      textContent: {
        content: [
          { type: 'string' }
        ]
      }
    }
  },
  methods: {
    handleSubmit() {
      if (this.formData.name.trim().length === 0) {
        alert('請輸入姓名')
        return
      }
      if (this.formData.feedback.trim().length === 0) {
        alert('請輸入反映內容')
        return
      }
      const feedbackText = { ...this.formData }

      const localStorageFeedbacks = JSON.parse(localStorage.getItem('feedbackData')) || []

      localStorageFeedbacks.push(feedbackText)


      localStorage.setItem('feedbackData', JSON.stringify(localStorageFeedbacks))

      this.formData.feedback = ''
      alert('已收到您的意見提交')
    }
  }
}

</script>

<style scoped>
.title {
  font-size: 30px;
  margin: 15px 30px;
}
.input-area {
  width: 90%;
  margin-left: 50px;
}
.submit-btn {
  position: absolute;
  right: 80px;
}
.name {
  margin: 30px;
  width: 200px;
}
.feedback-content {
  margin: 30px;
}
</style>
