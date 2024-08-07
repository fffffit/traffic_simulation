import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/global.css'
import dataV from '@jiaminghi/data-view'


import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)


Vue.use(dataV)

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
