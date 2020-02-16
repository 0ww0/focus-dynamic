import Vue from 'vue'
window.$ = require('jquery')

import Entry from './entry.vue'

new Vue({
    el : '.wrapper-content',
    render : h => h(Entry)
})
