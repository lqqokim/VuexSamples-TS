import { License } from '@/types'
import { MutationTree, GetterTree, ActionTree } from 'vuex';

interface State {
    licenses: License[];
}

const state: State = {
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

const getters: GetterTree<State, any> = {
    /**
     * GetterTree에 Generic으로 State 타입처리 되기 때문에 
     * state 타입을 지정하지 않아도 된다.
     * @param state \
     */
    totalCount(state) {
        return state.licenses.length;
    }
};

const mutations: MutationTree<State> = {
    /**
     * 1.MotationTree에 Generic으로 State 타입처기 되기 때문에
     * state 타입을 지정하지 않아도 된다.
     * 2.payload는 api상에서 이미 any로 정의되어 있다.
     * @param state 
     * @param payload 
     */
    deleteLicense(state: State, payload: number) {
        const licenses: License[] = [];
        for (let i = 0; i < state.licenses.length; i++) {
            if (state.licenses[i].id !== payload) {
                licenses.push(state.licenses[i]);
            }
        }
        state.licenses = licenses;
    }
};

const actions: ActionTree<State, any> = {
    async deleteLicenseAsync(context, payload: number) {
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
    actions
}