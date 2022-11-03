import Vue from 'vue'
import VueRouter from 'vue-router'
import Formulario from './components/Formulario-Component.vue'
import MockApi from './components/MockApi-Component.vue'


Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', redirect: '/Formulario' },
        { path: '/Formulario', component: Formulario },
        { path: '/MockApi', component: MockApi },
    ]
})



