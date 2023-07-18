import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import BootstrapVue3 from "bootstrap-vue-3";
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/antd.css';
import "./assets/style.css";

const app = createApp(App);
app.use(BootstrapVue3);
app.use(VueSlider);

app.use(router);
app.mount("#app");
