import Vue from 'vue';
import router from '../src/config/routes';
import App from './App.vue';

new Vue({
  el: 'app',
  router,
  render: h => h(App)
  // template: '<App/>',
  // components: { App }
});
