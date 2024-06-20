import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

console.log(process.env.apikey)
createApp(App)
  .use(router)
  .mount('#app');
