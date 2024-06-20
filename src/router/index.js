import { createRouter, createWebHistory } from 'vue-router';
import DeFiDashboard from '../components/DeFiDashboard.vue';
import NFTMarketplaceTracker from '../components/NFTMarketplaceTracker.vue';

const routes = [
  {
    path: '/',
    name: 'DeFiDashboard',
    component: DeFiDashboard,
  },
  {
    path: '/nft-marketplace',
    name: 'NFTMarketplaceTracker',
    component: NFTMarketplaceTracker,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
