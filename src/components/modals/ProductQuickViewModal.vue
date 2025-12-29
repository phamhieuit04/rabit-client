<script setup>
import '@splidejs/vue-splide/css'
import { mapStores } from 'pinia'
import { useUiStore } from '@/stores/ui'
import { useProductsStore } from '@/stores/products'
import { useCartStore } from '@/stores/cart'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import { Minus, Plus, X } from 'lucide-vue-next'
</script>

<template>
    <div
        v-if="uiStore.displayProductQuickView"
        class="fixed inset-0 z-10 flex items-center justify-center bg-black/30"
    >
        <div class="relative flex w-full max-w-[920px] gap-8 bg-white pt-8 pr-12 pb-4 pl-12">
            <div
                class="absolute right-6 cursor-pointer p-4 hover:opacity-75"
                @click="(uiStore.setDisplayProductQuickView(false), (currentQuantity = 1))"
            >
                <X size="32" />
            </div>
            <div class="flex w-full max-w-[400px] flex-col items-center gap-4">
                <div class="size-[400px]">
                    <img
                        :src="productsStore.previewImage"
                        alt=""
                        class="h-full w-full object-contain"
                    />
                </div>
                <Splide :options="carouselOptions" @splide:click="onClick">
                    <SplideSlide
                        v-for="item in productsStore.previewProduct?.images"
                        class="size-20 cursor-pointer border-2 border-gray-200 hover:brightness-90"
                    >
                        <img :src="item.image_url" class="h-full w-full object-contain" />
                    </SplideSlide>
                </Splide>
            </div>
            <div class="flex flex-col justify-center gap-4">
                <div class="flex flex-col gap-2">
                    <h1
                        class="line-clamp-2 text-2xl font-medium"
                        style="font-family: 'Ysabeau Office'"
                    >
                        {{ productsStore.previewProduct?.name }}
                    </h1>
                    <div class="flex items-center gap-2">
                        <p class="font-medium">{{ $t('product.category') }}:</p>
                        <p class="text-gray-500">
                            {{ productsStore.previewProduct?.categoryName }}
                        </p>
                    </div>
                    <p class="text-2xl font-bold">
                        {{ productsStore.previewProduct?.price.toLocaleString('de-DE') }}đ
                    </p>
                    <div>
                        <p class="font-medium">{{ $t('product.description') }}:</p>
                        <p class="line-clamp-3">{{ productsStore.previewProduct?.description }}</p>
                    </div>
                </div>
                <div class="flex items-center justify-between">
                    <div
                        class="flex items-center justify-center rounded-sm outline outline-gray-300"
                    >
                        <div
                            @click="
                                () => {
                                    if (currentQuantity > 1) {
                                        currentQuantity--
                                    }
                                }
                            "
                            class="flex size-10 cursor-pointer items-center justify-center rounded-tl-sm rounded-bl-sm bg-[#5c5c5c] outline outline-gray-300 hover:opacity-75"
                        >
                            <Minus size="20" class="text-white" />
                        </div>
                        <span class="w-16 text-center text-lg font-semibold">
                            {{ currentQuantity }}
                        </span>
                        <div
                            @click="currentQuantity++"
                            class="flex size-10 cursor-pointer items-center justify-center rounded-tr-sm rounded-br-sm bg-[#5c5c5c] outline outline-gray-300 hover:opacity-75"
                        >
                            <Plus size="20" class="text-white" />
                        </div>
                    </div>
                    <button
                        @click="
                            cartStore.addToCart(productsStore.previewProduct.id, currentQuantity)
                        "
                        class="cursor-pointer rounded-md bg-[#5c5c5c] px-6 py-2.5 text-white hover:opacity-75"
                    >
                        <h1 class="uppercase">{{ $t('product.addToCart') }}</h1>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            carouselOptions: {
                speed: 400,
                pagination: false,
                width: '400px',
                autoWidth: true,
                focus: 0,
                omitEnd: true,
                gap: 4,
            },
            currentQuantity: 1,
        }
    },
    computed: {
        ...mapStores(useUiStore, useProductsStore, useCartStore),
    },
    methods: {
        onClick(slide, event) {
            let index = event.index
            let url = this.productsStore.previewProduct?.images[index].image_url
            this.productsStore.setPreviewImage(url)
        },
    },
}
</script>
