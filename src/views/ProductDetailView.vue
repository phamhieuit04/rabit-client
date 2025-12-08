<script setup>
import { useProductsStore } from '@/stores/products'
import { Info } from 'lucide-vue-next'
import { mapStores } from 'pinia'
</script>

<template>
    <div class="mx-auto w-full max-w-7xl px-4 py-8">
        <div class="grid grid-cols-1 gap-10 md:grid-cols-2">
            <!-- Start images section -->
            <div>
                <div
                    v-if="productsStore.currentProduct.images.length === 1"
                    class="aspect-4/5 w-full overflow-hidden rounded-lg bg-gray-100"
                >
                    <img
                        :src="productsStore.currentProduct.images[0].image_url"
                        class="h-full w-full object-cover"
                    />
                </div>
                <div v-else class="grid grid-cols-2 gap-4">
                    <div
                        class="aspect-4/5 w-full overflow-hidden rounded-lg bg-gray-100"
                        v-for="image in productsStore.currentProduct.images"
                        :key="image.id"
                    >
                        <img :src="image.image_url" class="h-full w-full object-cover" />
                    </div>
                </div>
            </div>
            <!-- End images section -->

            <!-- Start product infor -->
            <div class="space-y-6 md:pl-6">
                <h1
                    class="font-serif text-4xl leading-snug font-medium"
                    style="font-family: 'Cormorant Garamond'"
                >
                    {{ productsStore.currentProduct.name }}
                </h1>
                <div class="text-sm text-gray-400">
                    Thể loại: {{ productsStore.currentProduct.category.name }}
                </div>
                <div class="text-2xl font-semibold">
                    {{ productsStore.currentProduct.price.toLocaleString('de-DE') }}₫
                </div>
                <div
                    class="inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-2 shadow-sm"
                >
                    <button
                        @click="
                            () => {
                                if (currentQuantity > 1) {
                                    currentQuantity--
                                }
                            }
                        "
                        class="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full text-xl font-light text-gray-700 hover:bg-gray-100"
                    >
                        −
                    </button>
                    <span class="mx-4 min-w-5 text-center text-lg font-medium text-gray-800">
                        {{ currentQuantity }}
                    </span>
                    <button
                        @click="currentQuantity++"
                        class="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full text-xl font-light text-gray-700 hover:bg-gray-100"
                    >
                        +
                    </button>
                </div>
                <button
                    class="w-full cursor-pointer rounded-xl bg-black py-3 font-medium text-white duration-150 hover:bg-gray-900 hover:opacity-75"
                >
                    Thêm vào giỏ hàng
                </button>
                <div class="border-t pt-6">
                    <button class="flex w-full items-center justify-between text-left">
                        <span class="flex items-center gap-2 font-medium text-gray-800">
                            <Info />
                            Thông tin sản phẩm
                        </span>
                        <span class="text-xl">−</span>
                    </button>
                    <div class="mt-4 text-sm leading-relaxed text-gray-700">
                        {{ productsStore.currentProduct.detail }}
                    </div>
                </div>
            </div>
            <!-- End product infor -->
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentId: null,
            currentQuantity: 1,
        }
    },
    mounted() {
        this.getProduct()
    },
    computed: {
        ...mapStores(useProductsStore),
    },
    methods: {
        getProduct() {
            this.productsStore.fetchCurrentProduct(this.$route.params.id)
        },
    },
}
</script>
