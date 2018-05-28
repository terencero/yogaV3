import Vue from 'vue';
import VueRouter from 'vue-router';
import About from '../components/About';
import Social from '../components/Social';
import App from '../App';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [{
    path: '/about',
    component: About,
  }, {
    path:'/social',
    component: Social,
  }, {
    path:'/',
    component: App,
  }]
});