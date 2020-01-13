import Vue from 'vue'
window.$ = require('jquery')

import Entry from './entry.vue'

new Vue({
    el : '.wrapper-navigation',
    render : h => h(Entry)
})
