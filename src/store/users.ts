import { GetterTree, MutationTree, ActionTree } from 'vuex';
import { UserState, RootState } from '@/types';


const state: UserState = {
    users: ['Tony']
}

const getters: GetterTree<UserState, RootState> = {

};

const mutations: MutationTree<UserState> = {
    /**
     * - users에 존재하는 동일한 deleteLicense도 삭제시 마찬가지로 동작
     * - 함수명만 같으면 호출시킨다.
     * - 때문에 namespace를 사용하여 Store Modules을 구분해주어야함
     * @param state 
     * @param payload 
     */
    deleteLicense(state , payload: number) {
        console.log('users')
    }
};

const actions: ActionTree<UserState, RootState> = {

};

export const users = {
    state,
    getters,
    mutations,
    actions,
};