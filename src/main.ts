import Vue from 'vue/dist/vue.js'
import Vuex from 'vuex';
import store from './store/index'
import App from './App.vue'

Vue.use(Vuex);

new Vue({
    store,
    el: '#app',
    components: { App },
    template: "<App/>",
})
