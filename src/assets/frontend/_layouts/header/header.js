import Vue from 'vue'
window.$ = require('jquery')
import { store } from './store/store.js';

import Entry from './entry.vue'

new Vue({
    el : '.wrapper-header',
    store,
    render : h => h(Entry)
})
