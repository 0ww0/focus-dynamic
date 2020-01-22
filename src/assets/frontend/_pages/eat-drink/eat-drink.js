import Vue from 'vue'
import Siema from 'vue2-siema'
window.$ = require('jquery')

import router from './router/router.js';

import Entry from './entry.vue'

Vue.use(Siema)

new Vue({
    el : '.wrapper-content',
    router,
    render : h => h(Entry)
})
