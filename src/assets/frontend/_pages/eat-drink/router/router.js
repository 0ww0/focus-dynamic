import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import indexPage from '../pages/index/_index.vue'
import templatePage from '../pages/template/_template.vue'

let router = new Router({
    //mode: 'history',
    base: '/eat-drink/',
    root: '/eat-drink/',
    routes : [
        {
            path : '/',
            name : 'index',
            component : indexPage,

        },

        {
            path : '/:slug',
            name : 'template',
            component : templatePage,
        },
    ]
})

export default router
