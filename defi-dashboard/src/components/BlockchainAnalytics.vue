<template>
    <div>
      <h1>Test</h1>
      <div v-if="loading">Loading...</div>
      <div v-else-if="error">Error: {{ error.message }}</div>
      <div v-else>
      </div>
    </div>
  </template>
  