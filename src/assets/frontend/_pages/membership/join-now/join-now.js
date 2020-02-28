import Vue from 'vue'
window.$ = require('jquery')
import { store } from './store/store.js';
import VCalendar from 'v-calendar';

import Entry from './entry.vue'

Vue.use(VCalendar);

new Vue({
    el : '.wrapper-content',
    store,
    render : h => h(Entry)
})
