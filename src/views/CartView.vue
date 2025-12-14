<script setup>
import { useCartStore } from '@/stores/cart'
import { Minus, Plus, CircleX } from 'lucide-vue-next'
import { onMounted } from 'vue'

const cartStore = useCartStore()

onMounted(async () => {
    await cartStore.fetchCartItem()
    cartStore.products = cartStore.products.map((p) => ({
        ...p,
        quantity: p.quantity ?? 1,
    }))
})

const formatPrice = (n) => (Number(n) || 0).toLocaleString('de-DE') + 'đ'
</script>

<template>
    <div class="mx-auto max-w-7xl pt-10">
        <h1 class="mb-8 font-mono text-3xl">{{ $t('cart.title') }}</h1>

        <div class="overflow-hidden rounded-xl border border-gray-300">
            <div
                class="grid grid-cols-12 bg-gray-100 px-6 py-4 text-lg font-semibold text-gray-600"
            >
                <div class="col-span-6">{{ $t('cart.productInfo') }}</div>
                <div class="col-span-2 text-center">{{ $t('cart.price') }}</div>
                <div class="col-span-2 text-center">{{ $t('cart.quantity') }}</div>
                <div class="col-span-2 text-right">{{ $t('cart.totalPrice') }}</div>
            </div>

            <div
                v-for="item in cartStore.products"
                :key="item.product.id"
                class="grid grid-cols-12 items-center border-t border-gray-300 px-6 py-6"
            >
                <div class="col-span-6 flex items-start gap-4">
                    <div
                        class="flex max-h-28 min-h-28 max-w-28 min-w-28 items-center justify-center overflow-hidden rounded-md border border-gray-300"
                    >
                        <img
                            v-if="item.product.images.lenght > 0"
                            :src="item.product.images[0].image_url"
                            class="h-full w-full object-cover"
                        />
                        <img
                            v-else
                            src="../assets/default_thumbnail.jpg"
                            class="h-full w-full object-cover"
                        />
                    </div>

                    <div class="flex flex-col gap-2">
                        <p class="line-clamp-2 text-base leading-snug font-medium text-gray-800">
                            {{ item.product.name }}
                        </p>

                        <div
                            class="flex w-fit cursor-pointer items-center gap-1 text-red-500 hover:underline"
                            @click="cartStore.deleteItem(item.product.id)"
                        >
                            <CircleX size="16" />
                            <span>Xóa</span>
                        </div>
                    </div>
                </div>

                <div class="col-span-2 text-center font-medium text-gray-700">
                    {{ formatPrice(item.product.price) }}
                </div>

                <div class="col-span-2 flex justify-center">
                    <div class="flex items-center gap-3">
                        <button
                            class="flex h-8 w-8 items-center justify-center rounded border border-gray-300 hover:bg-gray-200"
                            @click="cartStore.decreaseQuantity(item.product.id)"
                        >
                            <Minus size="14" />
                        </button>

                        <span class="w-8 text-center font-semibold">
                            {{ item.quantity }}
                        </span>

                        <button
                            class="flex h-8 w-8 items-center justify-center rounded border border-gray-300 hover:bg-gray-200"
                            @click="cartStore.increaseQuantity(item.product.id)"
                        >
                            <Plus size="14" />
                        </button>
                    </div>
                </div>

                <div class="col-span-2 text-right font-semibold text-gray-800">
                    {{ formatPrice(item.product.price * item.quantity) }}
                </div>
            </div>
        </div>

        <div class="mt-8 flex items-center justify-between">
            <button
                class="cursor-pointer rounded-lg border border-gray-300 px-6 py-3 text-gray-700 hover:bg-gray-100"
                @click="$router.push('/')"
            >
                {{ $t('cart.continueShopping') }}
            </button>

            <div class="text-right">
                <p class="text-lg font-medium">{{ $t('cart.totalBill') }}:</p>
                <p class="mt-1 text-2xl font-bold text-gray-800">
                    {{
                        formatPrice(
                            cartStore.products.reduce(
                                (sum, p) => sum + p.product.price * p.quantity,
                                0,
                            ),
                        )
                    }}
                </p>
            </div>
        </div>

        <div class="mt-5 flex justify-end">
            <button
                class="cursor-pointer rounded-lg bg-gray-700 px-10 py-4 text-lg text-white hover:bg-gray-800"
            >
                {{ $t('cart.checkout') }}
            </button>
        </div>
    </div>
</template>
