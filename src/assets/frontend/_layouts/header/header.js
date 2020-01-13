import Vue from 'vue'
window.$ = require('jquery')

import Entry from './entry.vue'

new Vue({
    el : '.wrapper-footer',
    render : h => h(Entry)
})
