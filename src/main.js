import './assets/styles/main.scss';

import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';
// import { BootstrapVue } from 'bootstrap-vue';
import BaseButton from './components/base/BaseButton.vue';
import TheHome from './pages/TheHome.vue';
import TheHome2 from './pages/TheHome2.vue';

import SignIn from './components/Auth/SignIn.vue';
import SignUp from './components/Auth/SignUp.vue';
import BaseForm from './components/base/BaseForm.vue';
import BaseDialog from './components/base/BaseDialog.vue';



const app = createApp(App);

app.component('base-button', BaseButton);
app.component('the-home', TheHome);
app.component('the-home2', TheHome2);

app.component('sign-in', SignIn);
app.component('sign-up', SignUp);
app.component('base-form', BaseForm);
app.component('base-dialog', BaseDialog);


app.mount('#app');