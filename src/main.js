import './assets/styles/main.scss';

import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';
// import { BootstrapVue } from 'bootstrap-vue';
import BaseButton from './components/base/BaseButton.vue';
import TheHome from './pages/TheHome.vue';



const app = createApp(App);

app.component('base-button', BaseButton);
app.component('the-home', TheHome);


app.mount('#app');