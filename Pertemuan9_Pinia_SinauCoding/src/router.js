import { createRouter, createWebHistory } from 'vue-router';
import ChartView from './components/CartView.vue';
import AddedItems from './components/AddItems.vue';

const routes = [
  { path: '/', component: ChartView },
  { path: '/added-items', component: AddedItems },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
