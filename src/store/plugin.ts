import { Store, Payload } from 'vuex';
import { RootState } from '@/types';

export const mutationLog = (store: Store<RootState>) => {
    store.subscribe((mutation: { type: string, payload: any }, state) => {
        console.log('[mutation log]', mutation);
    });
};