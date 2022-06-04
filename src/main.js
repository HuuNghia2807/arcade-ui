import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import BadgeDirective from 'primevue/badgedirective';

import 'primeicons/primeicons.css'; 
import './assets/styles/global.css'

const app = createApp(App)

app.use(router)

app.use(PrimeVue)

app.directive('badge', BadgeDirective);

app.mount('#app')
