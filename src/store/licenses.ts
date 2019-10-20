import { License, LicenseState, RootState } from '@/types'
import { MutationTree, GetterTree, ActionTree } from 'vuex';

const state: LicenseState = {
    licenses: [
        {
            id: 1,
            email: 'kis4204@naver.com',
            licenseKey: 'dsandjiqhdu128e91yu91'
        },
        {
            id: 2,
            email: 'aaa4204@naver.com',
            licenseKey: 'dsandjiqhdu128e91y123u91'
        },
        {
            id: 3,
            email: 'bbbb@naver.com',
            licenseKey: 'd122sandji123qhdu128e91y123u91'
        },
        {
            id: 4,
            email: 'ccc4204@naver.com',
            licenseKey: 'bvsdsandjiqhdu128e91y123u91'
        }
    ]
};

/**
 * S: State의 타입
 * R: RootState의 타입 
 */
const getters: GetterTree<LicenseState, RootState> = {
    licenses(state) {
        return state.licenses;
    },
    /**
     * GetterTree에 Generic으로 State 타입처리 되기 때문에 
     * state 타입을 지정하지 않아도 된다.
     * @param state \
     */
    totalCount(state) {
        return state.licenses.length;
    }
};

const mutations: MutationTree<LicenseState> = {
    /**
     * 1.MotationTree에 Generic으로 State 타입처기 되기 때문에
     * state 타입을 지정하지 않아도 된다.
     * 2.payload는 api상에서 이미 any로 정의되어 있다.
     * @param state 
     * @param payload 
     */
    deleteLicense(state: LicenseState, payload: number) {
        const licenses: License[] = [];
        for (let i = 0; i < state.licenses.length; i++) {
            if (state.licenses[i].id !== payload) {
                licenses.push(state.licenses[i]);
            }
        }
        state.licenses = licenses;
    }
};

/*
 export default new Vuex.Store({
     state: { // RootState
        checked: false
     },
     modules: {
         licenses,
         users
     }
 })

 - 각각의 State에서 RootState의 값을 사용하여 처리를 할경우도 있기 때문에
 R: RoosState를 생성하여 타입에 추가해준다. 
 - any -> RootState로 변경하였음
 */
const actions: ActionTree<LicenseState, RootState> = {
    async deleteLicenseAsync(this, context, payload: number) {
        return new Promise((resolve) => {
            setTimeout(() => {
                context.commit('deleteLicense', payload);
                resolve();
            }, 2000)
        })
    }
};

export const licenses = {
    state,
    getters,
    mutations,
    actions,
    namespaced: true // namespace 처리
}