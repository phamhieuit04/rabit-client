<script setup>
import { apiHelper } from '@/helpers/axios'
import { mapStores } from 'pinia'
import { useAuthStore } from '@/stores/auth'
</script>

<template>
    <div class="mx-auto max-w-7xl px-6 py-10">
        <div class="grid grid-cols-[250px_1fr] gap-10">
            <aside class="space-y-6">
                <h2 class="text-xl font-semibold tracking-wide">{{ $t('profile.title') }}</h2>
                <p class="text-sm">
                    <span class="font-semibold">{{ $t('profile.hello') }}</span>
                    {{ authStore.currentUser.name }}!
                </p>
                <nav class="flex flex-col gap-3 text-[15px]">
                    <RouterLink
                        to="account"
                        class="hover:text-black/60"
                        active-class="font-semibold"
                    >
                        {{ $t('profile.accountInfo') }}
                    </RouterLink>
                    <RouterLink
                        to="orders"
                        class="hover:text-black/60"
                        active-class="font-semibold"
                    >
                        {{ $t('profile.yourOrder') }}
                    </RouterLink>
                    <RouterLink
                        to="addresses"
                        class="hover:text-black/60"
                        active-class="font-semibold"
                    >
                        {{ $t('profile.address') }}
                    </RouterLink>
                    <button @click="logout" class="cursor-pointer text-left hover:text-black/60">
                        {{ $t('auth.logout') }}
                    </button>
                </nav>
            </aside>
            <section>
                <RouterView />
            </section>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        logout() {
            apiHelper
                .get('/logout', {
                    headers: {
                        Authorization: 'Bearer ' + this.authStore.currentUser.token,
                    },
                })
                .then((res) => {
                    if (res.status == 200) {
                        this.authStore.setLoggedInState(false)
                        this.authStore.setCurrentUser(null)
                        alert('Đăng xuất thành công!')
                        this.$router.push('/')
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        },
    },
    computed: {
        ...mapStores(useAuthStore),
    },
}
</script>
