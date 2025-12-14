<script setup>
import {useAuthStore} from '@/stores/auth'
import { useUiStore } from '@/stores/ui'
import { mapStores } from 'pinia';
import { apiHelper } from '@/helpers/axios';
</script>

<template>
    <div class="container mx-auto">
        <div class="mt-12 grid grid-rows-3 items-center justify-center gap-2 text-center">
            <h1 class="m-3 text-4xl font-light" style="font-family: 'Ysabeau Office'">{{ $t('auth.login') }}</h1>
            <span class="text-lg font-light">
                {{ $t('auth.dontHaveAccount') }}
                <button @click="goToRegister()" class="text-gray-400 hover:text-black cursor-pointer">{{ $t('auth.here') }}</button>
            </span>

            <!-- Start Register Form -->
            <input
                v-model="email" type="text"
                class="mb-4 ml-4 size-14 w-lg content-center rounded-md border border-gray-400 pl-6"
                name="email"
                id="email"
                :placeholder="$t('auth.emailPlaceholder')"
            ></input>
            <input type="password"
                v-model="password"
                class="mb-4 ml-4 size-14 w-lg content-center rounded-md border border-gray-400 pl-6"
                name="password"
                id="password"
                :placeholder="$t('auth.passwordPlaceholder')"
            ></input>
            <!-- End Register Form -->

            <!-- Start Buttons -->
            <button
                @click="login()"
                class="mb-4 ml-4 size-14 w-lg cursor-pointer rounded-md bg-gray-600 text-xl font-light text-amber-50 uppercase hover:bg-gray-500 hover:font-medium"
            >
                {{ $t('auth.login') }}
            </button>
            <p class="mb-4 text-lg font-light ml-4">{{ $t('auth.orLoginWith') }}</p>
            <img
                class="mx-auto w-45 cursor-pointer"
                alt="google-login-button"
                src="//bizweb.dktcdn.net/assets/admin/images/login/gp-btn.svg"
            />
            <!-- End Buttons -->
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
        }
    },

    methods: {
        login() {
            if (
                this.email == '' ||
                this.password == ''
            ) {
                alert(this.$t('auth.validateFail'));
            }

            const formData = new FormData();
            formData.append('email', this.email);
            formData.append('password', this.password);
            apiHelper.post('/login', formData).then((res) => {
                if (res.status === 200) {
                    this.authStore.setLoggedInState(true);
                    this.authStore.setCurrentUser(res.data.data);
                    alert(this.$t('auth.loginSuccess'));
                    this.$router.push('/');
                }
            }).catch((err) => {
                console.log(err);
            })
        },
        goToRegister() {
            this.$router.push('register');
        }
    },
    computed: {
        ...mapStores(useAuthStore, useUiStore)
    }
}
</script>