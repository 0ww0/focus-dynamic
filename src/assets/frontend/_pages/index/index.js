import Vue from 'vue'
import Siema from 'vue2-siema'
import VueAgile from 'vue-agile'

window.$ = require('jquery')

import Entry from './entry.vue'

Vue.use(Siema)
Vue.use(VueAgile)

new Vue({
    el : '.wrapper-content',
    render : h => h(Entry)
})
