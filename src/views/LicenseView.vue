<template>
    <div class="license">
        <h1>This is license page: {{totalCount}}</h1>

        <table class="table">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">email</th>
                    <th scope="col">license key</th>
                    <th scope="col">delete [Mutation]</th>
                    <th scope="col">delete [Async Action]</th>
                    <th scope="col">delete [dispatch]</th>
                </tr>
            </thead>
            <tbody v-for="license in licenses" :key="license.id">
                <tr>
                    <td>{{license.id}}</td>
                    <td>{{license.email}}</td>
                    <td>{{license.licenseKey}}</td>
                    <td>
                        <button
                            type="button"
                            class="btn btn-danger"
                            @click="deleteLicense(license.id)"
                        >delete</button>
                    </td>
                    <td>
                        <button
                            type="button"
                            class="btn btn-danger"
                            @click="deleteLicenseAsync(license.id)"
                        >delete</button>
                    </td>
                    <td>
                        <button
                            type="button"
                            class="btn btn-danger"
                            @click="test(license.id)"
                        >delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="add-license">
            <div class="input-group mb-3">
                <input
                    type="text"
                    class="form-control"
                    placeholder="Email"
                    aria-label="Email"
                    aria-describedby="basic-addon1"
                    v-model="email"
                >
            </div>
            <div class="input-group mb-3">
                <input
                    type="text"
                    class="form-control"
                    placeholder="LicenseKey"
                    aria-label="LicenseKey"
                    aria-describedby="basic-addon1"
                    v-model="licenseKey"
                >
            </div>
            <button
                type="button"
                class="btn btn-success"
                @click="addLicense({ id: totalCount + 1, email, licenseKey})"
            >Add</button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Getter, Mutation, Action, namespace } from 'vuex-class';
import { License } from '../types';

const LicenseModule = namespace('licenses');

/**
 * LicenseMutation대신 UserMutation으로 선언하면
 * users의 deleteLicense가 호출된다.
 */
const UserModule = namespace('users');

@Component
export default class LicenseView extends Vue {
    // @State licenses!: License[];
    @LicenseModule.Getter licenses!: License[];
    @LicenseModule.Getter totalCount!: number;

    /**
     * Mutation
     * : Store의 State의 변경을 Store내부의 메소드를 통해서만
     * 변경하도록 Mutation을 사용한다.
     */
    @LicenseModule.Mutation deleteLicense!: (id: number) => void;
    @LicenseModule.Action deleteLicenseAsync!: (id: number) => void;
    @LicenseModule.Mutation addLicense!: (license: License) => void;

    email: string = '';
    licenseKey: string = '';

    async test(id: number) {
        /**
         * namespace를 추가해줬기 때문에 path에 license 추가
         */
        await this.$store.dispatch('licenses/deleteLicenseAsync', id);
        console.log('delete success!');
    }
}
</script>
<style scoped>
.add-license {
    margin-left: 500px;
    margin-right: 500px;
}
</style>


