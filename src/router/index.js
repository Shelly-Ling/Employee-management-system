import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
import Regist from '../views/Regist.vue'
import Employee from '../views/employee.vue'
import Performance from '../views/Performance.vue'
import Career from '../views/Career.vue'
import Feedback from '../views/Feedback.vue'
import WorkReport from '../views/WorkReport.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/regist',
    name: 'employee-regist',
    component: Regist
  },
  {
    path: '/employee',
    name: 'employee',
    component: Employee
  },
  {
    path: '/performance',
    name: 'employee-performance',
    component: Performance
  },
  {
    path: '/career',
    name: 'career',
    component: Career
  }, {
    path: '/feedback',
    name: 'feedback',
    component: Feedback
  }, {
    path: '/workReport',
    name: 'workReport',
    component: WorkReport
  },
  {
    path: '*',
    name: 'Not-Found',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
