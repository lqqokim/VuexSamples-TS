import Vue from 'vue'
import Vuex from 'vuex'
import { licenses } from './licenses'
import { users } from './users';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        licenses,
        users
    }
})
