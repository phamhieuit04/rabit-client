<script setup>
import { mapStores } from 'pinia'
import { useAuthStore } from '@/stores/auth'
</script>

<template>
    <div class="space-y-6">
        <h1 class="font-serif text-5xl font-medium" style="font-family: 'Cormorant Garamond'">
            {{ $t('profile.yourOrder') }}
        </h1>
        <div class="border border-gray-300">
            <div class="grid grid-cols-5 divide-x divide-gray-400 bg-gray-700 text-white">
                <div class="p-3 text-sm font-semibold">{{ $t('order.title') }}</div>
                <div class="p-3 text-sm font-semibold">{{ $t('order.date') }}</div>
                <div class="p-3 text-sm font-semibold">{{ $t('profile.address') }}</div>
                <div class="p-3 text-sm font-semibold">{{ $t('order.totalPrice') }}</div>
                <div class="p-3 text-sm font-semibold">{{ $t('order.paymentStatus') }}</div>
            </div>
            <div class="p-6 text-center text-gray-600">{{ $t('order.emptyOrder') }}</div>
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
