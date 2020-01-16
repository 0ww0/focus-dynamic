import Vue from 'vue'
import Siema from 'vue2-siema'
window.$ = require('jquery')

import Entry from './entry.vue'

Vue.use(Siema)

new Vue({
    el : '.wrapper-content',
    render : h => h(Entry)
})
