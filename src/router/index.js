import { createRouter, createWebHistory } from 'vue-router';
import DeFiDashboard from '../components/DeFiDashboard.vue';
import NFTMarketplaceTracker from '../components/NFTMarketplaceTracker.vue';
import GovernanceDashboard from '../components/GovernanceDashboard.vue';
import BlockchainAnalytics from '../components/BlockchainAnalytics.vue';

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
  {
    path: '/governance-dashboard',
    name: 'GovernanceDashboard',
    component: GovernanceDashboard,
  },
  {
    path: '/blockchain-analytics',
    name: 'BlockchainAnalytics',
    component: BlockchainAnalytics,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
