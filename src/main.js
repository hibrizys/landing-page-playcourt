import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import BootstrapVue3 from "bootstrap-vue-3";

import "./assets/style.css";

const app = createApp(App);
app.use(BootstrapVue3);
app.use(router);
app.mount("#app");
