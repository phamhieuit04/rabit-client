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

    <div
        v-if="isCheckingStatus"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
    >
        <div
            class="flex w-[340px] flex-col items-center gap-4 rounded-xl bg-white px-8 py-7 text-center shadow-2xl"
        >
            <!-- Loading -->
            <svg
                v-if="paymentResult === null"
                class="h-10 w-10 animate-spin text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
            >
                <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                />
                <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
            </svg>

            <!-- Success -->
            <svg
                v-if="paymentResult === true"
                class="h-12 w-12 text-emerald-500"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
            >
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>

            <!-- Failed -->
            <svg
                v-if="paymentResult === false"
                class="h-12 w-12 text-rose-500"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
            >
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

            <p class="text-sm font-medium text-gray-700">
                <span v-if="paymentResult === null">
                    {{ $t('orders.checkingPayment') }}
                </span>
                <span v-else-if="paymentResult === true">
                    {{ $t('orders.paymentSuccess') }}
                </span>
                <span v-else>
                    {{ $t('orders.paymentFailed') }}
                </span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            listBill: [],
            isCheckingStatus: false,
            paymentResult: null,
        }
    },

    mounted() {
        this.fetchListBill()

        if (this.$route.query.orderCode) {
            this.isCheckingStatus = true
            this.fetchBillStatus()
        }
    },

    computed: {
        ...mapStores(useAuthStore),
    },

    methods: {
        async fetchListBill() {
            await apiHelper
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

        async fetchBillStatus() {
            await apiHelper
                .get('/bill/status', {
                    headers: {
                        Authorization: 'Bearer ' + this.authStore.currentUser.token,
                    },
                    params: {
                        order_code: this.$route.query.orderCode,
                    },
                })
                .then(async (res) => {
                    if (res.status === 200) {
                        this.paymentResult = true
                        await this.fetchListBill()
                    }

                    setTimeout(() => {
                        this.isCheckingStatus = false
                        this.$router.replace('/profile/orders')
                    }, 1500)
                })
                .catch(() => {
                    this.paymentResult = false

                    setTimeout(() => {
                        this.isCheckingStatus = false
                    }, 1500)
                })
        },
    },
}
</script>
