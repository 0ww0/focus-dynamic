import Vue from 'vue'
import VueAgile from 'vue-agile'

window.$ = require('jquery')

import Entry from './entry.vue'

Vue.use(VueAgile)

new Vue({
    el : '.wrapper-content',
    render : h => h(Entry)
})
