<script setup>
import { mapStores } from 'pinia'
import { useAuthStore } from '@/stores/auth'
import { apiHelper } from '@/helpers/axios'
</script>

<template>
    <div class="space-y-6">
        <h1 class="font-serif text-5xl font-medium" style="font-family: 'Cormorant Garamond'">
            {{ $t('profile.yourOrder') }}
        </h1>
        <table class="w-full border-collapse border border-gray-300">
            <thead class="bg-gray-700 text-white">
                <tr>
                    <th class="border border-gray-400 px-4 py-3 text-left text-sm font-semibold">
                        {{ $t('order.code') }}
                    </th>
                    <th class="border border-gray-400 px-4 py-3 text-left text-sm font-semibold">
                        {{ $t('profile.address') }}
                    </th>
                    <th class="border border-gray-400 px-4 py-3 text-left text-sm font-semibold">
                        {{ $t('order.totalPrice') }}
                    </th>
                    <th class="border border-gray-400 px-4 py-3 text-left text-sm font-semibold">
                        {{ $t('order.status') }}
                    </th>
                </tr>
            </thead>

            <tbody>
                <tr v-if="listBill.length > 0" v-for="item in listBill" :key="item.id">
                    <td class="border border-gray-300 px-4 py-3">
                        {{ item.order_code }}
                    </td>
                    <td class="border border-gray-300 px-4 py-3">
                        {{ item.address }}
                    </td>
                    <td class="border border-gray-300 px-4 py-3">
                        {{ item.total_price.toLocaleString() }}
                    </td>
                    <td class="border border-gray-300 px-4 py-3">
                        <span
                            class="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide whitespace-nowrap"
                            :class="getStatusInfo(item.status).class"
                        >
                            {{ getStatusInfo(item.status).text }}
                        </span>
                    </td>
                </tr>
                <tr v-else>
                    <td colspan="4" class="px-6 py-6 text-center text-gray-600">
                        {{ $t('order.emptyOrder') }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            listBill: [],
        }
    },

    mounted() {
        this.fetchListBill()
    },

    computed: {
        ...mapStores(useAuthStore),
    },

    methods: {
        fetchListBill() {
            apiHelper
                .get('/bill/index', {
                    headers: {
                        Authorization: 'Bearer ' + this.authStore.currentUser.token,
                    },
                })
                .then((res) => {
                    if (res.status === 200) {
                        this.listBill = res.data.data
                    }
                })
        },

        getStatusInfo(status) {
            switch (status) {
                case 0:
                    return {
                        text: this.$t('orders.status.failed'),
                        class: `
                            bg-rose-50
                            text-rose-700
                            border border-rose-200
                        `,
                    }
                case 1:
                    return {
                        text: this.$t('orders.status.processing'),
                        class: `
                            bg-indigo-50
                            text-indigo-700
                            border border-indigo-200
                        `,
                    }
                case 2:
                    return {
                        text: this.$t('orders.status.pending'),
                        class: `
                            bg-amber-50
                            text-amber-700
                            border border-amber-200
                        `,
                    }
                case 3:
                    return {
                        text: this.$t('orders.status.paid'),
                        class: `
                            bg-emerald-50
                            text-emerald-700
                            border border-emerald-200
                        `,
                    }
                default:
                    return {
                        text: this.$t('orders.status.unknown'),
                        class: `
                            bg-gray-50
                            text-gray-600
                            border border-gray-200
                        `,
                    }
            }
        },
    },
}
</script>
