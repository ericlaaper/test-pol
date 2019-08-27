import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Module1 from './views/Module1.vue'
import Login from './views/Login.vue'

Vue.use(Router);
import store from './store'


export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },


        {
            path: '/overleg',
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


        {
            path: '/login',
            name: 'Login',
            component: Login
        },

        // {
        //     path: '/about',
        //     name: 'about',
        //     // route level code-splitting
        //     // this generates a separate chunk (about.[hash].js) for this route
        //     // which is lazy-loaded when the route is visited.
        //     component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        // }
    ]
})
