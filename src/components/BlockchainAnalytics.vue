<template>
  <div>
    <h1>Blockchain Analytics Platform</h1>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <div v-else>
      <h2>Total Transactions (Past 24 Hours): {{ totalTransactions }}</h2>
      <h2>Total Transactions (Past Year): {{ totalTransactionsYear }}</h2>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { ethBlocksClient } from '../graphqlClient';

const GET_BLOCKCHAIN_ANALYTICS = `
  query($timestamp24h: Int!, $timestampYear: Int!) {
    transactions24h: transactions(where: { timestamp_gt: $timestamp24h }) {
      id
    }
    transactionsYear: transactions(where: { timestamp_gt: $timestampYear }) {
      id
    }
  }
`;

export default {
  setup() {
    const loading = ref(true);
    const error = ref(null);
    const totalTransactions = ref(0);
    const totalTransactionsYear = ref(0);

    const oneDayAgoTimestamp = Math.floor(Date.now() / 1000) - 24 * 60 * 60; // 24 hours ago
    const oneYearAgoTimestamp = Math.floor(Date.now() / 1000) - 365 * 24 * 60 * 60; // 1 year ago

    onMounted(async () => {
      try {
        const data = await ethBlocksClient.request(GET_BLOCKCHAIN_ANALYTICS, {
          timestamp24h: oneDayAgoTimestamp,
          timestampYear: oneYearAgoTimestamp,
        });
        totalTransactions.value = data.transactions24h.length;
        totalTransactionsYear.value = data.transactionsYear.length;
      } catch (err) {
        error.value = err;
      } finally {
        loading.value = false;
      }
    });

    return {
      loading,
      error,
      totalTransactions,
      totalTransactionsYear,
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
</style>
