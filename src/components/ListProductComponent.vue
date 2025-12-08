<script setup>
import { Search, ArrowDownAZ } from 'lucide-vue-next'
import { useUiStore } from '@/stores/ui'
import { useProductsStore } from '@/stores/products'
import { mapStores } from 'pinia'
import ProductQuickViewModal from './modals/ProductQuickViewModal.vue'
</script>

<template>
    <!-- Start sort bar -->
    <div
        v-show="$route.path != '/'"
        class="flex w-full items-center justify-between gap-6 rounded-xl bg-[#faf2e6] p-4"
    >
        <button
            @click="allProducts"
            class="cursor-pointer rounded-md px-4 py-2 outline outline-gray-300 hover:bg-[#838383] hover:text-white"
        >
            {{ $t('products.allProduct') }}
        </button>
        <div class="flex items-center gap-4">
            <div class="flex items-center justify-center gap-2">
                <ArrowDownAZ />
                <p class="font-medium">{{ $t('products.sortBy') }}</p>
            </div>
            <ul class="flex gap-4">
                <li
                    @click="sortedProducts('default')"
                    class="cursor-pointer rounded-md px-4 py-2 outline outline-gray-300 hover:bg-[#838383] hover:text-white"
                    :class="{
                        'bg-[#5c5c5c] font-semibold text-white':
                            $route.query['sortType'] == 'default',
                    }"
                >
                    {{ $t('products.sortType.default') }}
                </li>
                <li
                    @click="sortedProducts('newest')"
                    class="cursor-pointer rounded-md px-4 py-2 outline outline-gray-300 hover:bg-[#838383] hover:text-white"
                    :class="{
                        'bg-[#5c5c5c] font-semibold text-white':
                            $route.query['sortType'] == 'newest',
                    }"
                >
                    {{ $t('products.sortType.newest') }}
                </li>
                <li
                    @click="sortedProducts('best_seller')"
                    class="cursor-pointer rounded-md px-4 py-2 outline outline-gray-300 hover:bg-[#838383] hover:text-white"
                    :class="{
                        'bg-[#5c5c5c] font-semibold text-white':
                            $route.query['sortType'] == 'best_seller',
                    }"
                >
                    {{ $t('products.sortType.bestSeller') }}
                </li>
                <li
                    @click="sortedProducts('price_asc')"
                    class="cursor-pointer rounded-md px-4 py-2 outline outline-gray-300 hover:bg-[#838383] hover:text-white"
                    :class="{
                        'bg-[#5c5c5c] font-semibold text-white':
                            $route.query['sortType'] == 'price_asc',
                    }"
                >
                    {{ $t('products.sortType.priceLowToHigh') }}
                </li>
                <li
                    @click="sortedProducts('price_desc')"
                    class="cursor-pointer rounded-md px-4 py-2 outline outline-gray-300 hover:bg-[#838383] hover:text-white"
                    :class="{
                        'bg-[#5c5c5c] font-semibold text-white':
                            $route.query['sortType'] == 'price_desc',
                    }"
                >
                    {{ $t('products.sortType.priceHighToLow') }}
                </li>
            </ul>
        </div>
    </div>
    <!-- End sort bar -->

    <!-- Start display products -->
    <div class="container mx-auto flex flex-col items-center justify-center py-16">
        <h1
            v-show="$route.path == '/'"
            class="text-4xl font-medium"
            style="font-family: 'Cormorant Garamond'"
        >
            {{ $t('products.title') }}
        </h1>
        <ul class="grid grid-cols-4 gap-5 py-6">
            <li
                v-for="item in productsStore.listProduct"
                class="mb-4 flex max-w-[300px] flex-col gap-2"
            >
                <div class="group relative h-[380px]">
                    <img
                        v-if="item.images.length > 0"
                        :src="item.images[0].image_url"
                        class="h-full w-full object-cover"
                    />
                    <img
                        v-else
                        src="../assets/default_thumbnail.jpg"
                        class="h-full w-full object-cover"
                    />
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
                <p class="text-gray-400">{{ item.price.toLocaleString('de-DE') }}đ</p>
            </li>
        </ul>
        <button
            v-if="productsStore.listProduct.length > 0"
            @click="onClick"
            class="cursor-pointer rounded-md px-6 py-2 opacity-75 outline outline-gray-400 hover:opacity-100"
        >
            <h1 v-if="$route.path == '/'" class="font-medium text-gray-500 uppercase">
                {{ $t('products.showAll') }}
            </h1>
            <h1 v-else class="font-medium text-gray-500 uppercase">
                {{ $t('products.showMore') }}
            </h1>
        </button>
    </div>
    <!-- End display products -->

    <!-- Start product quick view modal -->
    <ProductQuickViewModal />
    <!-- End product quick view modal -->
</template>

<script>
export default {
    data() {
        return {
            query: {},
            offset: 0,
            limit: 16,
        }
    },
    mounted() {
        this.handleRouteQuery()
    },
    computed: {
        ...mapStores(useUiStore, useProductsStore),
    },
    methods: {
        onClick() {
            if (this.$route.path == '/') {
                this.$router.push({ path: '/products', query: { sortType: 'default' } })
            } else {
                this.offset += this.limit
                this.handleFetchProducts()
            }
        },
        handleRouteQuery() {
            if (this.$route.query['categoryId'] != undefined) {
                this.query['categoryId'] = this.$route.query['categoryId']
            }
            if (this.$route.query['sortType'] != undefined) {
                this.query['sortType'] = this.$route.query['sortType']
            }
            this.handleFetchProducts()
        },
        handleFetchProducts() {
            this.productsStore.fetchListProduct(
                this.offset,
                this.limit,
                this.query['categoryId'],
                this.query['sortType'],
            )
        },
        allProducts() {
            this.query = {}
            this.handleFetchProducts()
            this.$router.push({ path: '/products', query: { sortType: 'default' } })
        },
        sortedProducts(sortType) {
            this.offset = 0
            if (this.$route.query['categoryId'] != undefined) {
                this.query['categoryId'] = this.$route.query['categoryId']
            }
            this.query['sortType'] = sortType
            this.handleFetchProducts()
            this.$router.push({ path: '/products', query: this.query })
        },
    },
}
</script>
