import Vue from 'vue'
window.$ = require('jquery')

import Entry from './entry.vue'

new Vue({
    el : '.wrapper-header',
    render : h => h(Entry)
})
