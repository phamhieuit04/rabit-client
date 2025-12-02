<script setup>
import { Search } from 'lucide-vue-next'
import { useUiStore } from '@/stores/ui'
import { mapStores } from 'pinia'
import ProductQuickViewModal from './modals/ProductQuickViewModal.vue'
</script>

<template>
    <div class="container mx-auto flex flex-col items-center justify-center py-16">
        <h1 class="text-3xl font-medium" style="font-family: 'Ysabeau Office'">
            {{ $t('products.title') }}
        </h1>
        <ul class="grid grid-cols-4 gap-5 py-6">
            <li v-for="item in listProduct" class="mb-4 flex max-w-[300px] flex-col gap-2">
                <div class="group relative max-h-[380px]">
                    <img :src="item.image" class="object-contain" />
                    <div class="absolute bottom-0 mb-2.5 flex w-full items-center justify-center">
                        <div
                            @click="uiStore.setDisplayProductQuickView(true)"
                            class="flex -translate-y-5 cursor-pointer items-center justify-center rounded-full bg-white p-3 opacity-0 drop-shadow-2xl transition duration-200 group-hover:translate-y-0 group-hover:opacity-100"
                        >
                            <Search size="20" />
                        </div>
                    </div>
                </div>
                <h1 class="line-clamp-2 cursor-pointer font-medium hover:opacity-75">
                    {{ item.name }}
                </h1>
                <p class="text-gray-400">{{ item.price }}</p>
            </li>
        </ul>
        <button
            class="cursor-pointer rounded-md px-6 py-2 opacity-75 outline outline-gray-400 hover:opacity-100"
        >
            <h1 class="font-medium text-gray-500 uppercase">
                {{ $t('products.showAll') }}
            </h1>
        </button>
    </div>

    <!-- Start product quick view modal -->
    <ProductQuickViewModal />
    <!-- End product quick view modal -->
</template>

<script>
export default {
    props: ['listProduct'],
    computed: {
        ...mapStores(useUiStore),
    },
}
</script>
