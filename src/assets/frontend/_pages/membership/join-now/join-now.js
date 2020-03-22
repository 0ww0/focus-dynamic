import Vue from 'vue'
import VCalendar from 'v-calendar';
window.$ = require('jquery')
import { store } from './store/store.js';

import Entry from './entry.vue'

Vue.use(VCalendar);

new Vue({
    el : '.wrapper-content',
    store,
    render : h => h(Entry)
})
