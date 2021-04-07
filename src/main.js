import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import 'iview/dist/styles/iview.css'
import 'iview/dist/styles/fonts/ionicons.svg'
import 'iview/dist/styles/fonts/ionicons.ttf'
import 'iview/dist/styles/fonts/ionicons.woff'
import 'iview/dist/styles/fonts/ionicons.woff2'



Vue.use(iView);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
