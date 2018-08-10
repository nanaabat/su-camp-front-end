import Vue from 'vue';
import Router from 'vue-router';
import Dash from '@/components/Dashboard';
import House from '@/components/House';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Dash
    },
    {
      path: '/house/:house_id',
      component: House
    }
  ]
});
