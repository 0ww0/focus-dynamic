import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import indexPage from '../pages/index/_index.vue'
import testPage from '../pages/test/_test.vue'

let router = new Router({
    //mode: 'history',
    base: '/eat-drink/',
    routes : [
        {
            path : '/',
            name : 'index',
            component : indexPage
        },

        {
            path : '/test',
            name : 'test',
            component : testPage
        }
    ]
})

export default router
