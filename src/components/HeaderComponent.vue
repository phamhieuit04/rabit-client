<script setup>
import { useCategoriesStore } from '@/stores/categories'
import { useUiStore } from '@/stores/ui'
import { useProductsStore } from '@/stores/products'
import { useCartStore } from '@/stores/cart'
import { useAuthStore } from '@/stores/auth'
import {
    MapPin,
    MessageCircleQuestionMark,
    Search,
    ShoppingCart,
    CircleUser,
    CircleX,
    Minus,
    Plus,
    LogIn,
    UserPlus2,
    X,
    Languages,
    Settings,
    LogOut,
} from 'lucide-vue-next'
import { mapStores } from 'pinia'
import { apiHelper } from '@/helpers/axios'
</script>

<template>
    <div class="flex items-center justify-center">
        <div class="container mx-auto max-w-7xl">
            <!-- Start main header -->
            <div class="flex items-center justify-between pt-6">
                <!-- Start left items -->
                <ul class="flex min-w-2xs items-center gap-8">
                    <li
                        @click="navigateToStoreLocation"
                        class="flex cursor-pointer items-center justify-center gap-1.5 hover:opacity-75"
                    >
                        <MapPin />
                        <span>{{ $t('header.shop') }}</span>
                    </li>
                    <li
                        @click="navigateToContact"
                        class="flex cursor-pointer items-center justify-center gap-1.5 hover:opacity-75"
                    >
                        <MessageCircleQuestionMark />
                        <span>{{ $t('header.contact') }}</span>
                    </li>
                </ul>
                <!-- End left items -->

                <h1 @click="navigateToHome" class="cursor-pointer text-2xl font-bold uppercase">
                    Rabit
                </h1>

                <!-- Start right items -->
                <ul class="flex min-w-2xs items-center justify-end">
                    <li v-for="item in rightItems" class="group cursor-pointer">
                        <div @click="item.onClick" class="relative px-3 pb-6 hover:opacity-75">
                            <component :is="item.icon" />
                        </div>

                        <!-- Start search card -->
                        <div
                            v-if="uiStore.displaySearchCard && item.type == 'search'"
                            class="fixed top-0 right-0 left-0 z-10 min-h-96 cursor-default bg-white drop-shadow-xl"
                        >
                            <div class="container mx-auto flex flex-col items-center gap-8 py-12">
                                <div class="flex w-full items-center justify-between">
                                    <div class="flex grow items-center justify-center">
                                        <form
                                            @submit.prevent="searchProducts(searchKey)"
                                            class="flex w-[650px] items-center justify-between bg-[#f2f2f2]"
                                        >
                                            <input
                                                v-model="searchKey"
                                                type="text"
                                                class="w-full px-6 py-4 outline-0"
                                                :placeholder="$t('search.placeholder')"
                                            />
                                            <div
                                                class="cursor-pointer px-4 hover:opacity-75"
                                                @click="searchProducts(searchKey)"
                                            >
                                                <Search size="28" />
                                            </div>
                                        </form>
                                    </div>
                                    <div
                                        @click="uiStore.setDisplaySearchCard(false)"
                                        class="cursor-pointer hover:opacity-75"
                                    >
                                        <X size="32" />
                                    </div>
                                </div>
                                <h1
                                    class="pt-6 text-4xl font-medium"
                                    style="font-family: 'Cormorant Garamond'"
                                >
                                    {{ $t('search.featuredCategories') }}
                                </h1>
                                <ul class="flex gap-6">
                                    <li
                                        v-for="item in featuredCategories"
                                        class="flex cursor-pointer flex-col gap-2 hover:opacity-75"
                                    >
                                        <img
                                            :src="item.thumnail"
                                            alt=""
                                            class="max-w-70 object-contain"
                                        />
                                        <h1 class="font-semibold uppercase">
                                            {{ item.name }}
                                        </h1>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- End search card -->

                        <!-- Start cart hover card  -->
                        <div
                            v-if="item.type == 'cart'"
                            class="absolute z-10 hidden min-h-80 w-96 -translate-x-[50%] cursor-default flex-col overflow-hidden rounded-md bg-white drop-shadow-2xl group-hover:flex group-hover:opacity-100"
                        >
                            <h1 class="border-b-2 border-gray-300 p-4 font-bold uppercase">
                                {{ $t('cart.title') }}
                            </h1>
                            <div
                                v-if="cartStore.products.length === 0"
                                class="flex grow flex-col items-center justify-center gap-4 p-8"
                            >
                                <p class="text-center text-gray-500">
                                    {{ $t('cart.emptyCart') }}
                                </p>
                            </div>
                            <template v-else>
                                <ul
                                    class="flex max-h-96 grow flex-col gap-10 overflow-hidden overflow-x-hidden overflow-y-scroll p-4 pr-6"
                                    style="scrollbar-gutter: stable"
                                >
                                    <li
                                        v-for="item in cartStore.products"
                                        :key="item.product.id"
                                        class="flex w-full items-center gap-3"
                                    >
                                        <div
                                            class="aspect-square w-20 shrink-0 overflow-hidden rounded-md"
                                        >
                                            <img
                                                v-if="
                                                    item.product.images &&
                                                    item.product.images.length > 0
                                                "
                                                :src="item.product.images[0].image_url"
                                                class="h-full w-full object-cover"
                                            />
                                            <img
                                                v-else
                                                src="../assets/default_thumbnail.jpg"
                                                class="h-full w-full object-cover"
                                            />
                                        </div>

                                        <div class="flex w-full flex-col gap-4">
                                            <div class="flex w-full items-start">
                                                <p class="line-clamp-2 flex-1 text-sm font-medium">
                                                    {{ item.product.name }}
                                                </p>
                                                <div
                                                    class="ml-2 flex size-10 flex-none shrink-0 cursor-pointer justify-end hover:opacity-75"
                                                    @click="cartStore.deleteItem(item.product.id)"
                                                >
                                                    <CircleX color="gray" />
                                                </div>
                                            </div>

                                            <div class="flex w-full items-center justify-between">
                                                <div
                                                    class="flex items-center justify-center rounded-sm outline outline-gray-300"
                                                >
                                                    <div
                                                        class="flex size-6 cursor-pointer items-center justify-center rounded-tl-sm rounded-bl-sm outline outline-gray-300 hover:bg-[#f1f1f1]"
                                                        @click="
                                                            cartStore.decreaseQuantity(
                                                                item.product.id,
                                                            )
                                                        "
                                                    >
                                                        <Minus size="12" />
                                                    </div>

                                                    <span
                                                        class="w-8 text-center text-sm font-semibold"
                                                    >
                                                        {{ item.quantity }}
                                                    </span>

                                                    <div
                                                        class="flex size-6 cursor-pointer items-center justify-center rounded-tr-sm rounded-br-sm outline outline-gray-300 hover:bg-[#f1f1f1]"
                                                        @click="
                                                            cartStore.increaseQuantity(
                                                                item.product.id,
                                                            )
                                                        "
                                                    >
                                                        <Plus size="12" />
                                                    </div>
                                                </div>

                                                <p class="font-medium">
                                                    {{
                                                        (
                                                            item.product.price * item.quantity
                                                        ).toLocaleString('de-DE')
                                                    }}đ
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                                <div class="flex justify-between bg-[#f8f8f8] p-4">
                                    <div>
                                        <h1 class="font-medium">{{ $t('cart.totalBill') }}</h1>
                                        <p class="text-xl font-semibold">
                                            {{
                                                cartStore.products
                                                    .reduce(
                                                        (sum, p) =>
                                                            sum + p.product.price * p.quantity,
                                                        0,
                                                    )
                                                    .toLocaleString('de-DE')
                                            }}đ
                                        </p>
                                    </div>
                                    <button
                                        @click="goToCheckout"
                                        class="cursor-pointer rounded-md bg-[#5c5c5c] px-6 py-2 text-white hover:opacity-75"
                                    >
                                        {{ $t('cart.checkout') }}
                                    </button>
                                </div>
                            </template>
                        </div>
                        <!-- End cart hover card -->

                        <!-- Start profile hover card -->
                        <div
                            v-if="item.type == 'profile'"
                            class="absolute z-10 hidden min-h-12 w-60 -translate-x-[50%] cursor-default flex-col overflow-hidden rounded-md bg-white drop-shadow-2xl group-hover:flex group-hover:opacity-100"
                        >
                            <ul v-if="!authStore.isLoggedIn" class="flex flex-col gap-4 p-4">
                                <li
                                    @click="navigateToLogin()"
                                    class="flex cursor-pointer items-center justify-start gap-1.5 rounded-md p-1 hover:bg-[#838380] hover:text-white"
                                >
                                    <div class="flex size-8 items-center justify-center">
                                        <LogIn />
                                    </div>
                                    <span>{{ $t('auth.login') }}</span>
                                </li>
                                <li
                                    @click="navigateToRegister()"
                                    class="flex cursor-pointer items-center justify-start gap-1.5 rounded-md p-1 hover:bg-[#838380] hover:text-white"
                                >
                                    <div class="flex size-8 items-center justify-center">
                                        <UserPlus2 />
                                    </div>
                                    <span>{{ $t('auth.signup') }}</span>
                                </li>
                            </ul>
                            <ul v-else class="flex flex-col gap-4 p-4">
                                <li
                                    @click="navigateToProfile"
                                    class="flex cursor-pointer items-center justify-start gap-1.5 rounded-md p-1 hover:bg-[#838380] hover:text-white"
                                >
                                    <div class="flex size-8 items-center justify-center">
                                        <CircleUser />
                                    </div>
                                    <span>{{ $t('profile.title') }}</span>
                                </li>
                                <li
                                    @click="logout"
                                    class="flex cursor-pointer items-center justify-start gap-1.5 rounded-md p-1 hover:bg-[#838380] hover:text-white"
                                >
                                    <div class="flex size-8 items-center justify-center">
                                        <LogOut />
                                    </div>
                                    <span>{{ $t('auth.logout') }}</span>
                                </li>
                            </ul>
                        </div>
                        <!-- End profile hover card -->

                        <!-- Start setting hover card -->
                        <div
                            v-if="item.type == 'settings'"
                            class="absolute z-10 hidden min-h-12 w-60 -translate-x-[50%] cursor-default flex-col overflow-hidden rounded-md bg-white drop-shadow-2xl group-hover:flex group-hover:opacity-100"
                        >
                            <ul class="flex flex-col gap-4 p-4">
                                <li
                                    class="flex cursor-pointer items-center justify-start gap-1.5 rounded-md px-3 hover:bg-[#838380] hover:text-white"
                                >
                                    <Languages />
                                    <select
                                        v-model="$i18n.locale"
                                        class="w-full cursor-pointer border-0 py-2 outline-0"
                                        @change="uiStore.setCurrentLocale($i18n.locale)"
                                    >
                                        <option value="en" class="text-black">
                                            {{ $t('settings.english') }}
                                        </option>
                                        <option value="vi" class="text-black">
                                            {{ $t('settings.vietnamese') }}
                                        </option>
                                    </select>
                                </li>
                            </ul>
                        </div>
                        <!-- End setting hover card -->
                    </li>
                </ul>
                <!-- End right items -->
            </div>
            <!-- End main header -->

            <!-- Start list category -->
            <ul class="flex items-center justify-center py-6">
                <li class="cursor-pointer" @click="navigateToHome">
                    <span class="text-md px-3 font-medium hover:opacity-75">
                        {{ $t('header.home') }}
                    </span>
                </li>
                <li
                    v-for="item in categoriesStore.listCategory"
                    @click="navigateToProducts(item)"
                    class="group cursor-pointer"
                >
                    <span class="text-md relative px-3 pb-8 font-medium hover:opacity-75">
                        {{ item.name }}
                    </span>
                    <div
                        class="absolute z-10 mt-4 hidden min-h-52 min-w-96 -translate-x-[50%] transform cursor-default overflow-hidden rounded-md bg-white drop-shadow-2xl duration-200 group-hover:block group-hover:opacity-100"
                    >
                        <div class="bg-[#5c5c5c]">
                            <h1 class="px-6 py-4 font-semibold text-white uppercase">
                                {{ item.name }}
                            </h1>
                        </div>
                        <ul class="grid grid-cols-2 gap-4 px-6 py-4">
                            <li
                                v-for="child in item.childrens"
                                @click.stop="navigateToProducts(child)"
                                class="cursor-pointer hover:opacity-75"
                            >
                                <span>{{ child.name }}</span>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
            <!-- End list category -->
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            rightItems: [
                {
                    icon: Search,
                    type: 'search',
                    onClick: () => {
                        this.uiStore.setDisplaySearchCard(true)
                    },
                },
                {
                    icon: ShoppingCart,
                    type: 'cart',
                    onClick: () => {
                        this.$router.push('/cart')
                    },
                },
                {
                    icon: CircleUser,
                    type: 'profile',
                    onClick: () => {},
                },
                {
                    icon: Settings,
                    type: 'settings',
                    onClick: () => {},
                },
            ],
            featuredCategories: [
                {
                    name: 'Sổ kẻ ngang',
                    thumnail:
                        'https://bizweb.dktcdn.net/thumb/large/100/220/344/collections/rule.jpg?v=1751439042707',
                },
                {
                    name: 'Sổ tay',
                    thumnail:
                        'https://bizweb.dktcdn.net/thumb/large/100/220/344/collections/dot.jpg?v=1751438833820',
                },
                {
                    name: 'Vở viết',
                    thumnail:
                        'https://bizweb.dktcdn.net/thumb/large/100/220/344/collections/sl-072622-51930-13.jpg?v=1751438476727',
                },
                {
                    name: 'Phụ kiện',
                    thumnail:
                        'https://bizweb.dktcdn.net/thumb/large/100/220/344/collections/plain.jpg?v=1751438557053',
                },
            ],
            searchKey: '',
        }
    },
    mounted() {
        this.categoriesStore.fetchListCategory()

        if (this.authStore.isLoggedIn) {
            this.cartStore.fetchCartItem().then(() => {
                this.cartStore.products = this.cartStore.products.map((p) => ({
                    ...p,
                    quantity: p.quantity ?? 1,
                }))
            })
        }
    },
    computed: {
        ...mapStores(useUiStore, useCategoriesStore, useProductsStore, useAuthStore, useCartStore),
    },
    methods: {
        navigateToHome() {
            this.productsStore.fetchListProduct()
            this.$router.push('/')
        },
        navigateToLogin() {
            this.$router.push('/login')
        },
        navigateToRegister() {
            this.$router.push('/register')
        },
        navigateToProducts(category) {
            let query = { sortType: 'default' }
            if (category.id != null) {
                query['categoryId'] = category.id
            }
            this.$router.push({
                path: '/products',
                query: query,
            })
            this.categoriesStore.setCurrentCategory(category)
        },
        searchProducts(searchKey) {
            this.uiStore.setDisplaySearchCard(false)
            let query = { sortType: 'default', searchKey: searchKey }
            this.$router.push({
                path: '/products',
                query: query,
            })
            this.categoriesStore.clearCurrentCategory()
        },
        navigateToProfile() {
            this.$router.push('/profile/account')
        },
        logout() {
            apiHelper
                .get('/logout', {
                    headers: {
                        Authorization: 'Bearer ' + this.authStore.currentUser.token,
                    },
                })
                .then((res) => {
                    if (res.status == 200) {
                        this.authStore.setLoggedInState(false)
                        this.authStore.setCurrentUser(null)
                        alert('Đăng xuất thành công!')
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        formatPrice(value) {
            return value.toLocaleString('vi-VN') + 'đ'
        },
        goToCheckout() {
            this.$router.push('/checkout')
        },
        navigateToStoreLocation() {
            this.$router.push('/locations')
        },
        navigateToContact() {
            this.$router.push('/contact')
        },
    },
}
</script>
