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
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Getter, Mutation, Action } from 'vuex-class';
import { License } from '../types';

@Component
export default class LicenseView extends Vue {
    @State licenses!: License[];
    @Getter totalCount!: number;

    /**
     * Mutation
     * : Store의 State의 변경을 Store내부의 메소드를 통해서만
     * 변경하도록 Mutation을 사용한다.
     */
    @Mutation deleteLicense!: (id: number) => void;
    @Action deleteLicenseAsync!: (id: number) => void;

    async test(id: number) {
        await this.$store.dispatch('deleteLicenseAsync', id);
        console.log('delete success!');
    }
}
</script>

