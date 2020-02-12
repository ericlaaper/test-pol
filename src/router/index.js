import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Module1 from "../views/Module1";

Vue.use(VueRouter)
import store from "../store"

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },

    {
        path: '/quickscan',
        name: 'Module1',
        component: Module1,
        beforeEnter (to, from, next) {
            if (store.state.idToken) {
                next()
            } else {
                next('/login')
            }
        }
    },
]

const router = new VueRouter({
    mode:'history',
    routes
})

export default router
