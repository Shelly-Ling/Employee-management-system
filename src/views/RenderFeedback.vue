<template>
  <div class="reply-feedback-wrapper">
    <h1 class="title">意見反映紀錄</h1>

    <Table
      class="feedbacks"
      border
      :columns="columns4"
      :data="data1"
      @on-selection-change="selectTarget"
    ></Table>
    <Button
      class="btn-edit"
      type="primary"
      @click="showReplyArea"
      v-show="replying === false"
      >回覆</Button
    >
    <div class="reply-area" v-show="replying">
      <h1 class="title">回覆</h1>
      <div calss="form-wrapper">
        <Form ref="formData" :rules="textContent">
          <Form-item label="姓名" prop="text">
            <Input
              class="input-area"
              v-model="formData.replyer"
              type="text"
              placeholder="请输入姓名"
            ></Input>
          </Form-item>
          <Form-item label="回覆內容" prop="content">
            <Input
              class="input-area"
              v-model="formData.value"
              type="textarea"
              :rows="4"
              placeholder="请输入..."
            ></Input>
          </Form-item>
          <Button
            class="submit-btn"
            type="primary"
            @click="handleReplySubmit()"
          >
            提交
          </Button>
          <Button class="cancel-btn" @click="showReplyArea()"> 取消 </Button>
        </Form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.setFeedbackData()
  },
  data() {
    return {
      columns4: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '留言人',
          key: 'name'
        },
        {
          title: '意見反映',
          key: 'feedback'
        },
        {
          title: '回覆者',
          key: 'replyName'
        },
        {
          title: '回覆內容',
          key: 'reply'
        }
      ],
      data1: [
        {
          replyId: 1,
          name: '王小明',
          feedback: '環境很好',
          replyName: '',
          reply: ''
        },
        {
          replyId: 2,
          name: '张小刚',
          feedback: '李小红完成專案',
          replyName: '王小明',
          reply: 'good'
        },
        {
          replyId: 3,
          name: '李小红',
          feedback: '第三季開發進度資訊尚未收到',
          replyName: '张小刚',
          reply: '好的，已幫您聯繫'
        },
      ],
      selectFeedbacks: [],
      selectFeedbacksIdList: [],
      replying: false,
      formData: {
        replyer: '',
        value: ''
      },
      textContent: {
        content: [
          { type: 'string' }
        ]
      }
    }
  },
  methods: {
    setFeedbackData() {
      const feedbackData = JSON.parse(localStorage.getItem('feedbackData')) || []
      if (feedbackData.length === 0) {
        localStorage.setItem('feedbackData', JSON.stringify(this.data1))
        return
      }
      this.data1 = feedbackData
    },
    selectTarget(target) {
      this.selectFeedbacks = target
      const idList = []
      target.forEach((item) => {
        idList.push(item.replyId)
        //checked typeof item.replyId === numner
      })
      this.selectFeedbacksId = idList
    },
    showReplyArea() {
      if (this.replying === false) {
        this.replying = true

      } else {
        this.replying = false
      }
    },
    handleReplySubmit() {
      if (this.formData.value.trim().length === 0) {
        alert('回覆內容不可為空')
        return
      }
      if (this.selectFeedbacks.length === 0) {
        alert('請選擇一位回覆對象')
        return
      }
      const newData = []
      const feedbackData = JSON.parse(localStorage.getItem('feedbackData'))

      feedbackData.forEach((item) => {
        const index = this.selectFeedbacksId.indexOf(item.replyId)

        if (index === -1) {
          newData.push(item)
        } else {
          const updateReplyData = {
            ...item,
            replyName: this.formData.replyer,
            reply: this.formData.value
          }
          newData.push(updateReplyData)
        }
      })
      this.data1 = newData
      this.formData.replyer = ''
      this.formData.value = ''
      this.selectFeedbacksId = []
      localStorage.setItem('feedbackData', JSON.stringify(newData))
    }
  }
}
</script>

<style scoped>
.reply-feedback-wrapper {
  margin: 30px;
}
.feedbacks {
  margin: 20px 0;
}

.btn-edit,
.submit-btn {
  margin: 10px;
}
</style>