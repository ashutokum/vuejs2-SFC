import Vue from 'vue';
import App from './App.vue';

//Vue.use(HelloWorld);

var vm = new Vue({
  render: (h) => h(App)
}).$mount('#app');
