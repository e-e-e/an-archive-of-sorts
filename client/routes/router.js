import Vue from 'vue';
import VueRouter from 'vue-router';
import ommatidia from 'containers/ommatidia';
import subjects from 'containers/subjects';

Vue.use(VueRouter);

const routes = [
  { path: '/ommatidia', component: ommatidia },
  { path: '/ommatidia/:id', component: ommatidia },
  { path: '/subjects', component: subjects },
];

export default new VueRouter({ routes });
