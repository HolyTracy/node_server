import Vue from 'vue'
import App from './App.vue'
import http from './http'
import router from './router'
import ElementUI from 'element-ui'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$http = http('http://' + window.location.host);

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
