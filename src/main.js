// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 手动引入
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Http from '@/libs/http'
import Token from '@/libs/token'
import Util from '@/libs/util'

Vue.use(ElementUI)

Vue.prototype.$http = Http
Vue.prototype.$token = Token
Vue.prototype.$util = Util

// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
