import Vue from 'vue'
import './plugins/axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import { Message } from 'element-ui'
import App from './App.vue'
import router from './router'
import store from './store'

const mock = false

if (mock) {
  require('./mock/api')
}

Vue.prototype.$message = Message
Vue.config.productionTip = false
Vue.use(VueLazyLoad, {
  loading: '/imgs/loading-svg/loading-bars.svg'
})
Vue.use(VueCookie)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
