<template>
    <div class="container mx-auto">
        <div class="mt-12 grid grid-rows-3 items-center justify-center gap-2 text-center">
            <h1 class="m-3 text-4xl font-light" style="font-family: 'Ysabeau Office'">{{ $t('auth.signup') }}</h1>
            <span class="text-lg font-light">
                {{ $t('auth.accountAlreadyExist') }}
                <button @click="goToLogin()" class="text-gray-400 hover:text-black cursor-pointer">{{ $t('auth.here') }}</button>
            </span>

            <!-- Start Register Form -->
            <textarea
                v-model="name"
                class="mb-4 ml-4 size-14 w-lg content-center rounded-md border-1 border-gray-400 pl-6"
                name="name"
                id="name"
                :placeholder="$t('auth.namePlaceholder')"
            ></textarea>
            <textarea
                v-model="email"
                class="mb-4 ml-4 size-14 w-lg content-center rounded-md border-1 border-gray-400 pl-6"
                name="email"
                id="email"
                :placeholder="$t('auth.emailPlaceholder')"
            ></textarea>
            <input type="password"
                v-model="password"
                class="mb-4 ml-4 size-14 w-lg content-center rounded-md border-1 border-gray-400 pl-6"
                name="password"
                id="password"
                :placeholder="$t('auth.passwordPlaceholder')"
            ></input>
            <input type="password"
                v-model="rePassword"
                class="mb-4 ml-4 size-14 w-lg content-center rounded-md border-1 border-gray-400 pl-6"
                name="re-password"
                id="re-password"
                :placeholder="$t('auth.repasswordPlaceholder')"
            ></input>
            <!-- End Register Form -->

            <!-- Start Buttons -->
            <button
                @click="register()"
                class="mb-4 ml-4 size-14 w-lg cursor-pointer rounded-md bg-gray-600 text-xl font-light text-amber-50 uppercase hover:bg-gray-500 hover:font-medium"
            >
                {{ $t('auth.signup') }}
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

<script setup>
import { apiHelper } from '@/helpers/axios';
import { isJSDocAuthorTag } from 'typescript';
</script>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
            rePassword: '',
        }
    },
    methods: {
        register() {
            if (
                this.email == '' ||
                this.password == '' ||
                this.rePassword == ''
            ) {
                alert(this.$t('auth.validateFail'));
            }
            if (this.password !== this.rePassword) {
                alert(this.$t('auth.repasswordFail'))
            }

            const formData = new FormData();
            formData.append('name', this.name);
            formData.append('email', this.email);
            formData.append('password', this.password);
            apiHelper.post('/signup', formData).then((res) => {
                if (res.status === 200) {
                    alert(this.$t('auth.signupSuccess'));
                    this.$router.push('login')
                }
            }).catch((err) => {
                console.log(err);
            })
        },
        goToLogin() {
            this.$router.push('login');
        }
    },
}
</script>
