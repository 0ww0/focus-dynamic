import Vue from 'vue'
import VueAgile from 'vue-agile'
import Siema from 'vue2-siema'

window.$ = require('jquery')

import Entry from './entry.vue'

Vue.use(VueAgile)
Vue.use(Siema)

new Vue({
    el : '.wrapper-content',
    render : h => h(Entry)
})
