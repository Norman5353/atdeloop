import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';
// import { BootstrapVue } from 'bootstrap-vue';
import BaseButton from './components/base/BaseButton.vue';



const app = createApp(App);

app.component('base-button', BaseButton);


app.mount('#app');