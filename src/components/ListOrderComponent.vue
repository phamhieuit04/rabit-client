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
                        {{ item.status }}
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
                    if (res.status == 200) {
                        this.listBill = res.data.data
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        },
    },
}
</script>
