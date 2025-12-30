<script setup>
import { mapStores } from 'pinia'
import { useAuthStore } from '@/stores/auth'
</script>

<template>
    <div class="space-y-8">
        <!-- Title -->
        <h1 class="font-serif text-5xl font-medium" style="font-family: 'Cormorant Garamond'">
            {{ $t('profile.accountInfo') }}
        </h1>

        <!-- Content -->
        <div class="flex items-start gap-8">
            <!-- Avatar -->
            <div
                v-if="authStore.currentUser.avatar_url"
                class="flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-full border border-gray-300 bg-gray-100"
            >
                <img
                    :src="authStore.currentUser.avatar_url"
                    alt="Avatar"
                    class="h-full w-full object-cover"
                />
            </div>

            <!-- Info -->
            <div class="space-y-4 text-lg">
                <p>
                    <span class="font-semibold"> {{ $t('auth.namePlaceholder') }}: </span>
                    {{ authStore.currentUser.name }}
                </p>

                <p>
                    <span class="font-semibold">Email:</span>
                    {{ authStore.currentUser.email }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        ...mapStores(useAuthStore),
    },
}
</script>
