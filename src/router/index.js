import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: () =>
            import ('../views/Home.vue')
    },
    {
        path: '/about/:image_id/',
        name: 'AboutImage',
        component: () =>
            import ('../views/AboutImage.vue')
    },
    {
        path: '/favorits/',
        name: 'Favorits',
        component: () =>
            import ('../views/Favorits.vue')
    }
]

const router = new VueRouter({
    // mode: 'history',
    routes
})

export default router