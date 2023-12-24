import './assets/styles/main.scss';

import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import VOtpInput from "vue3-otp-input";
import { createVfm } from 'vue-final-modal';

import 'vue-final-modal/style.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css';
// import { BootstrapVue } from 'bootstrap-vue';
import BaseButton from './components/base/BaseButton.vue';
import FeatureButton from './components/FeatureButton.vue';
import BaseModal from './components/base/BaseModal.vue';
import BaseHeader from './components/base/BaseHeader.vue';
import TheHome from './pages/TheHome.vue';
import TheHome2 from './pages/TheHome2.vue';

import SignIn from './components/Auth/SignIn.vue';
import SignUp from './components/Auth/SignUp.vue';
import TheVerify from './components/Auth/TheVerify.vue';
import BaseForm from './components/base/BaseForm.vue';
import BaseDialog from './components/base/BaseDialog.vue';
import BaseNav from './components/base//BaseNav.vue';
import TheProfile from './pages/profile/TheProfile.vue';
import EditProfile from './pages/profile/EditProfile.vue';
import YourWallet from './pages/wallet/YourWallet.vue';



const app = createApp(App);
const vfm = createVfm()

app.component('base-button', BaseButton);
app.component('feature-button', FeatureButton);
app.component('the-home', TheHome);
app.component('the-home2', TheHome2);
app.component('sign-in', SignIn);
app.component('sign-up', SignUp);
app.component('the-verify', TheVerify);
app.component('the-profile', TheProfile);
app.component('edit-profile', EditProfile);
app.component('base-form', BaseForm);
app.component('base-nav', BaseNav);
app.component('base-header', BaseHeader);
app.component('base-dialog', BaseDialog);
app.component('base-modal', BaseModal);
app.component('your-wallet', YourWallet);
app.component('v-otp-input', VOtpInput);

app.use(vfm);
app.mount('#app');