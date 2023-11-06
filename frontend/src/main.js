import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";


import axios from 'axios'

axios.defaults.baseURL="http://backend.test/"

createApp(App).use(router).mount('#app')
