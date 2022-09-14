import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from "./i18n";

import CountryFlag from 'vue3-country-flag-icon'

import BreadCrumb from './components/Breadcrumb.vue'
import Logo from './components/Logo.vue'
import Modal from './components/Modal.vue'
import NFTCard from './components/NFTCard.vue'
import SelectLocale from './components/SelectLocale.vue'
import Vue3Lottie from 'vue3-lottie'
import 'flowbite'
import 'flowbite-vue'
import 'vue3-lottie/dist/style.css'
import './assets/styles/main.scss'
import 'vue3-country-flag-icon/dist/CountryFlag.css' 

const app = createApp(App)
app.component("Logo", Logo)
app.component("Modal", Modal)
app.component("BreadCrumb", BreadCrumb)
app.component("NFTCard",NFTCard)
app.component("SelectLocale", SelectLocale)
app.component('CountryFlag', CountryFlag)

app.use(router)

app.use(store)
app.use(Vue3Lottie)
app.use(i18n)


app.mount('#app')
