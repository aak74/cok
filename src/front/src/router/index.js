import Vue from 'vue';
import Router from 'vue-router';

import Home from '../pages/Home';
import Knowledges from '../pages/Knowledges';

Vue.use(Router);

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home,
  // },
  {
    path: '/',
    name: 'Knowledges',
    component: Knowledges,
  },
];

export default new Router({
  mode: 'history',
  routes,
});
