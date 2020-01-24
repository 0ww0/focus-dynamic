import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import fourOfourPage from '../pages/404/_404.vue'
import indexPage from '../pages/index/_index.vue'
import templatePage from '../pages/template/_template.vue'

let router = new Router({
    mode: 'history',
    base: '/eat-drink/',
    root: '/eat-drink/',
    routes : [
        {
            path: '*',
            component : fourOfourPage
        },

        {
            path : '/',
            name : 'index',
            component : indexPage,

        },

        {
            path : '/template',
            name : 'template',
            component : templatePage,
            meta : {
                title : 'Templete Page | Focus Dynamics'
            }
        }
    ]
})

export default router
