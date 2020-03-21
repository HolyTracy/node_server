import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main',
        component: resolve => (require(["../views/Main.vue"], resolve)),
        children: [
            // {
            //     path: '/categories/create',
            //     component: CategoryEdit
            // },
            // {
            //     path: '/categories/edit/:id',
            //     component: CategoryEdit,
            //     props: true
            // },
            // {
            //     path: '/categories/list',
            //     component: CategoryList
            // }
        ]
    },
]

const router = new VueRouter({
    routes
})

export default router