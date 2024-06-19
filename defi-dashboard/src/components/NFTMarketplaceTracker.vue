<template>
  <div>
    <h1>NFT Marketplace Tracker</h1>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <div v-else>
      <h2>Recent NFT Sales</h2>
      <ul>
        <li v-for="trade in trades" :key="trade.id">
          {{ trade.collection.symbol }} - {{ trade.priceETH }} ETH
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { NFTClient } from '../graphqlClient';

const GET_NFT_SALES = `
  query {
    trades(first: 30, orderBy: timestamp, orderDirection: desc) {
      id
      collection {
        name
        symbol
      }
      priceETH
      timestamp
    }
  }
`;

export default {
  setup() {
    const loading = ref(true);
    const error = ref(null);
    const trades = ref([]);

    onMounted(async () => {
      try {
        const data = await NFTClient.request(GET_NFT_SALES);
        trades.value = data.trades;
      } catch (err) {
        error.value = err;
      } finally {
        loading.value = false;
      }
    });

    return {
      loading,
      error,
      trades,
    };
  },
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  color: #333;
  padding: 20px;
}

h1 {
  color: #0056b3;
}

h2 {
  color: #007bff;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  background: #fff;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
