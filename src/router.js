import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Modules from './views/Modules.vue'
import Module1 from './views/Module1.vue'
import Module2 from './views/Module2.vue'
import Module3 from './views/Module3.vue'
import Module4 from './views/Module4.vue'
import Module5 from './views/Module5.vue'
import Module6 from './views/Module6.vue'
import Module7 from './views/Module7.vue'
import Module8 from './views/Module8.vue'
import Module9 from './views/Module9.vue'
import Module10 from './views/Module10.vue'
import Module11 from './views/Module11.vue'
import Login from './views/Login.vue'

Vue.use(Router)

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
            path: '/modules',
            name: 'Modules',
            component: Modules
        },
        {
            path: '/quickscan',
            name: 'Module1',
            component: Module1
        },
        {
            path: '/module2',
            name: 'Module2',
            component: Module2
        },
        {
            path: '/module3',
            name: 'Module3',
            component: Module3
        },
        {
            path: '/module4',
            name: 'Module4',
            component: Module4
        },
        {
            path: '/module5',
            name: 'Module5',
            component: Module5
        },
        {
            path: '/module6',
            name: 'Module6',
            component: Module6
        },
        {
            path: '/module7',
            name: 'Module7',
            component: Module7
        },
        {
            path: '/module8',
            name: 'Module8',
            component: Module8
        },
        {
            path: '/module9',
            name: 'Module9',
            component: Module9
        },
        {
            path: '/module10',
            name: 'Module10',
            component: Module10
        },
        {
            path: '/module11',
            name: 'Module11',
            component: Module11
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },

        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
})
