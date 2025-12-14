<script setup>
import { mapStores } from 'pinia'
import { useAuthStore } from '@/stores/auth'
</script>

<template>
    <div class="space-y-6">
        <h1 class="font-serif text-5xl font-medium" style="font-family: 'Cormorant Garamond'">
            {{ $t('profile.accountInfo') }}
        </h1>
        <div class="space-y-4">
            <p>
                <span class="font-semibold">{{ $t('auth.namePlaceholder') }}:</span>
                {{ authStore.currentUser.name }}
            </p>
            <p>
                <span class="font-semibold">Email:</span>
                {{ authStore.currentUser.email }}
            </p>
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
