<script setup>
import { mapStores } from 'pinia'
import { useAuthStore } from '@/stores/auth'
</script>

<template>
    <div class="space-y-6">
        <h1 class="font-serif text-5xl font-medium" style="font-family: 'Cormorant Garamond'">
            Đơn hàng của bạn
        </h1>
        <div class="border border-gray-300">
            <div class="grid grid-cols-5 divide-x divide-gray-400 bg-gray-700 text-white">
                <div class="p-3 text-sm font-semibold">Đơn hàng</div>
                <div class="p-3 text-sm font-semibold">Ngày</div>
                <div class="p-3 text-sm font-semibold">Địa chỉ</div>
                <div class="p-3 text-sm font-semibold">Giá trị đơn hàng</div>
                <div class="p-3 text-sm font-semibold">TT thanh toán</div>
            </div>
            <div class="p-6 text-center text-gray-600">Không có đơn hàng nào.</div>
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
