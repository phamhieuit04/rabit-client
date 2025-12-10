<script setup>
import { mapStores } from 'pinia'
import { useAuthStore } from '@/stores/auth'
import { apiHelper } from '@/helpers/axios'
</script>

<template>
    <div class="space-y-10">
        <h1 class="font-serif text-5xl font-medium" style="font-family: 'Cormorant Garamond'">
            Sổ địa chỉ
        </h1>
        <form @submit.prevent="storeAddress" class="space-y-4">
            <div class="flex gap-4">
                <div class="flex-1">
                    <label class="mb-2 block text-sm font-semibold"> Địa chỉ của bạn </label>
                    <input
                        v-model="address"
                        type="text"
                        placeholder="Nhập địa chỉ…"
                        class="w-full rounded border border-gray-300 px-4 py-2 outline-none focus:border-black"
                    />
                </div>
                <div class="flex-1">
                    <label class="mb-2 block text-sm font-semibold"> Số điện thoại </label>
                    <input
                        v-model="phone"
                        type="tel"
                        placeholder="Nhập số điện thoại…"
                        class="w-full rounded border border-gray-300 px-4 py-2 outline-none focus:border-black"
                    />
                </div>
            </div>
            <button
                class="cursor-pointer rounded bg-black px-6 py-2 text-white transition hover:bg-black/80"
            >
                Lưu địa chỉ
            </button>
        </form>
        <table class="w-full border-collapse border border-gray-300">
            <thead class="bg-gray-700 text-white">
                <tr>
                    <th class="border border-gray-400 px-4 py-3 text-left text-sm font-semibold">
                        Địa chỉ
                    </th>
                    <th class="border border-gray-400 px-4 py-3 text-left text-sm font-semibold">
                        Số điện thoại
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="listAddress.length > 0" v-for="item in listAddress">
                    <td class="border border-gray-300 px-4 py-3">{{ item.addresses }}</td>
                    <td class="border border-gray-300 px-4 py-3">{{ item.phone }}</td>
                </tr>
                <tr v-else>
                    <td colspan="2" class="px-6 py-6 text-center text-gray-600">
                        Không có địa chỉ nào.
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
            address: null,
            phone: null,
            listAddress: [],
        }
    },
    mounted() {
        this.fetchListAddress()
    },
    computed: {
        ...mapStores(useAuthStore),
    },
    methods: {
        fetchListAddress() {
            apiHelper
                .get('/address/list-address', {
                    headers: {
                        Authorization: 'Bearer ' + this.authStore.currentUser.token,
                    },
                    params: {
                        limit: 12,
                    },
                })
                .then((res) => {
                    if (res.status == 200) {
                        this.listAddress = res.data.data
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        storeAddress() {
            apiHelper
                .get('/address/add-address', {
                    headers: {
                        Authorization: 'Bearer ' + this.authStore.currentUser.token,
                    },
                    params: {
                        address: this.address,
                        phone: this.phone,
                    },
                })
                .then((res) => {
                    if (res.status == 200) {
                        this.fetchListAddress()
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        },
    },
}
</script>
