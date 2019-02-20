import Vue from 'vue';

// Components
import App from './App.vue';
import Listings from './components/Listings.vue';
import Listing from './components/Listing.vue';

Vue.config.productionTip = false;

// Vuex
import store from './store/';

// AJAX
import VueResource from 'vue-resource';
Vue.use(VueResource);

// Router
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// Set up possible routes
const routes = [
  { path: '/', exact: true, name: 'listings', component: Listings },
  { path: '/listing/:id', name: 'listing', component: Listing }
];

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active',
  transitionOnLoad: true,
  root: '/'
});

// Init app
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
