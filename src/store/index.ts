import Vue from 'vue'
import Vuex from 'vuex'
import { licenses } from './licenses'
import { users } from './users';
import { mutationLog } from './plugin';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        licenses,
        users
    },
    plugins: [
        mutationLog
    ]
})
