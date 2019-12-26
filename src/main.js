import Vue from 'vue'
import Vuex from 'vuex';
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(Vuex);
Vue.config.productionTip = false

import FormCard from './components/FormCard.vue'
import ProductsPage from './components/ProductsPage.vue'

const routes = [
    { path: '', redirect: '/products-list' },
    { path: '/products-list', name: 'products-list', component: ProductsPage },
    { path: '/form-card', name: 'form', component: FormCard }
]

const router = new VueRouter({
    routes
})

Vue.use(VueRouter)
new Vue({
    render: h => h(App),
    router
}).$mount('#app')