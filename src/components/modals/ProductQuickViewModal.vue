<script setup>
import '@splidejs/vue-splide/css'
import { mapStores } from 'pinia'
import { useUiStore } from '@/stores/ui'
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
                @click="uiStore.setDisplayProductQuickView(false)"
            >
                <X size="32" />
            </div>
            <div class="flex w-full max-w-[400px] flex-col items-center gap-4">
                <div class="size-[400px]">
                    <img :src="currentImage" alt="" class="h-full w-full object-contain" />
                </div>
                <Splide :options="carouselOptions" @splide:click="onClick">
                    <SplideSlide
                        v-for="item in product.images"
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
                        {{ product.name }}
                    </h1>
                    <div class="flex items-center gap-2">
                        <p class="font-medium">{{ $t('product.category') }}:</p>
                        <p class="text-gray-500">{{ product.categoryName }}</p>
                    </div>
                    <p class="text-2xl font-bold">{{ product.price }}</p>
                    <div>
                        <p class="font-medium">{{ $t('product.description') }}:</p>
                        <p class="line-clamp-3">{{ product.description }}</p>
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
            currentImage:
                'https://bizweb.dktcdn.net/thumb/large/100/220/344/products/1-48af9730-94be-42ea-b1d1-fd382a3ac292.jpg?v=1761619558357',
            currentQuantity: 1,
            product: {
                name: 'Sổ tay A5 kẻ ngang 130gsm 110 trang A Few Notes - Woman Who Think Too Much',
                images: [
                    {
                        image_url:
                            'https://bizweb.dktcdn.net/thumb/large/100/220/344/products/1-48af9730-94be-42ea-b1d1-fd382a3ac292.jpg?v=1761619558357',
                    },
                    {
                        image_url:
                            'https://bizweb.dktcdn.net/100/220/344/themes/1030367/assets/slider_2.jpg?1763605000974',
                    },
                    {
                        image_url:
                            'https://bizweb.dktcdn.net/thumb/large/100/220/344/products/1-48af9730-94be-42ea-b1d1-fd382a3ac292.jpg?v=1761619558357',
                    },
                    {
                        image_url:
                            'https://bizweb.dktcdn.net/thumb/large/100/220/344/products/1-48af9730-94be-42ea-b1d1-fd382a3ac292.jpg?v=1761619558357',
                    },
                    {
                        image_url:
                            'https://bizweb.dktcdn.net/thumb/large/100/220/344/products/1-48af9730-94be-42ea-b1d1-fd382a3ac292.jpg?v=1761619558357',
                    },
                    {
                        image_url:
                            'https://bizweb.dktcdn.net/thumb/large/100/220/344/products/1-48af9730-94be-42ea-b1d1-fd382a3ac292.jpg?v=1761619558357',
                    },
                    {
                        image_url:
                            'https://bizweb.dktcdn.net/thumb/large/100/220/344/products/1-48af9730-94be-42ea-b1d1-fd382a3ac292.jpg?v=1761619558357',
                    },
                ],
                price: '59.800₫',
                categoryName: 'Sổ kẻ ngang',
                description:
                    'Tiếp nối cảm hứng từ BST Ribbon 1, bộ sưu tập lần này vẫn mang sự điệu đà, nữ tính của phong cách lãng mạn Toile de jouy, Cottagecore đầy thanh lịch và quý tộc',
            },
        }
    },
    computed: {
        ...mapStores(useUiStore),
    },
    methods: {
        onClick(slide, event) {
            let index = event.index
            this.currentImage = this.product.images[index].image_url
        },
    },
}
</script>
