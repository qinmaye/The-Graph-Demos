<template>
  <div>
    <h1>Uniswap V2 Dashboard</h1>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <div v-else>
      <h2>Total Volume (USD): ${{ totalVolumeUSD }}</h2>
      <h2>Total Liquidity (USD): ${{ totalLiquidityUSD }}</h2>
      <h2>Top 5 Pairs by Volume (Past 24 Hours)</h2>
      <ul>
        <li v-for="pair in pairs" :key="pair.id">
          {{ pair.token0.symbol }} - {{ pair.token1.symbol }}: ${{ pair.dailyVolumeUSD }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { UniswapV2Client } from '../graphqlClient';

const GET_UNISWAP_DATA = `
  query($timestamp: Int!) {
    uniswapFactories(first: 1) {
      totalVolumeUSD
      totalLiquidityUSD
    }
    pairDayDatas(
        orderBy: dailyVolumeUSD
        orderDirection: desc
        where: {date_gt: $timestamp }
        first: 5
      ) {
        id
        dailyVolumeUSD
        token0 {
          symbol
        }
        token1 {
          symbol
        }
      }
  }
`;

export default {
  setup() {
    const loading = ref(true);
    const error = ref(null);
    const totalVolumeUSD = ref(0);
    const totalLiquidityUSD = ref(0);
    const pairs = ref([]);

    const oneDayAgoTimestamp = Math.floor(Date.now() / 1000) - 24 * 60 * 60; // 24 hours ago

    onMounted(async () => {
      try {
        const data = await UniswapV2Client.request(GET_UNISWAP_DATA, { timestamp: oneDayAgoTimestamp });
        totalVolumeUSD.value = data.uniswapFactories[0].totalVolumeUSD;
        totalLiquidityUSD.value = data.uniswapFactories[0].totalLiquidityUSD;
        pairs.value = data.pairDayDatas;
      } catch (err) {
        error.value = err;
      } finally {
        loading.value = false;
      }
    });

    return {
      loading,
      error,
      totalVolumeUSD,
      totalLiquidityUSD,
      pairs,
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
