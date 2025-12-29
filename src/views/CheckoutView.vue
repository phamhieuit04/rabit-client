<template>
    <div class="mx-auto max-w-7xl pt-10">
        <!-- Title -->
        <h1 class="mb-8 font-mono text-3xl">
            {{ $t('checkout.title') }}
        </h1>

        <div class="grid grid-cols-12 gap-8">
            <!-- LEFT -->
            <div class="col-span-8 space-y-8">
                <!-- Shipping info -->
                <div class="overflow-hidden rounded-xl border border-gray-300">
                    <div class="bg-gray-100 px-6 py-4 text-lg font-semibold text-gray-600">
                        {{ $t('checkout.shippingInfo') }}
                    </div>

                    <div class="space-y-4 px-6 py-6">
                        <select
                            v-model="selectedAddressId"
                            class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                        >
                            <option value="other">
                                {{ $t('checkout.anotherAddress') }}...
                            </option>
                            <option
                                v-for="item in listAddress"
                                :key="item.id"
                                :value="item.id"
                            >
                                {{ item.addresses }} - {{ item.phone }}
                            </option>
                        </select>

                        <input
                            type="email"
                            disabled
                            v-model="form.email"
                            placeholder="Email"
                            class="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-sm"
                        />

                        <input
                            type="text"
                            v-model="form.fullName"
                            :placeholder="$t('address.fullName')"
                            class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                        />

                        <div class="flex gap-3">
                            <select
                                class="w-24 rounded-md border border-gray-300 px-2 py-2 text-sm"
                            >
                                <option>🇻🇳 +84</option>
                            </select>
                            <input
                                type="text"
                                v-model="form.phone"
                                :placeholder="$t('address.phone')"
                                class="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm"
                            />
                        </div>

                        <input
                            type="text"
                            v-model="form.address"
                            :placeholder="$t('address.yourAddress')"
                            class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                        />
                    </div>
                </div>

                <!-- Payment -->
                <div class="overflow-hidden rounded-xl border border-gray-300">
                    <div class="bg-gray-100 px-6 py-4 text-lg font-semibold text-gray-600">
                        {{ $t('paymentMethods.payment') }}
                    </div>

                    <div class="space-y-3 px-6 py-6">
                        <label
                            class="flex cursor-pointer items-center gap-3 rounded-md border border-gray-300 px-4 py-3 text-sm hover:bg-gray-50"
                        >
                            <input type="radio" name="payment" />
                            <span>{{ $t('paymentMethods.cod') }}</span>
                        </label>

                        <label
                            class="flex cursor-pointer items-center gap-3 rounded-md border border-gray-300 px-4 py-3 text-sm hover:bg-gray-50"
                        >
                            <input type="radio" name="payment" />
                            <span>{{ $t('paymentMethods.online') }}</span>
                        </label>
                    </div>
                </div>
            </div>

            <!-- RIGHT -->
            <div class="col-span-4">
                <div class="overflow-hidden rounded-xl border border-gray-300">
                    <div class="bg-gray-100 px-6 py-4 text-lg font-semibold text-gray-600">
                        {{ $t('order.title') }} ({{ totalQuantity }} {{ $t('products.title1') }})
                    </div>

                    <div class="space-y-4 px-6 py-6">
                        <!-- Items -->
                        <div
                            v-for="item in cartStore.products"
                            :key="item.product.id"
                            class="flex items-start gap-4"
                        >
                            <div
                                class="flex h-16 w-16 items-center justify-center overflow-hidden rounded-md border border-gray-300"
                            >
                                <img
                                    v-if="item.product.images.length > 0"
                                    :src="item.product.images[0].image_url"
                                    class="h-full w-full object-cover"
                                />
                                <img
                                    v-else
                                    src="../assets/default_thumbnail.jpg"
                                    class="h-full w-full object-cover"
                                />
                            </div>

                            <div class="flex-1 text-sm">
                                <p class="line-clamp-2 font-medium text-gray-800">
                                    {{ item.product.name }}
                                </p>
                                <p class="text-xs text-gray-500">
                                    {{ $t('order.qty') }}: {{ item.quantity }}
                                </p>
                            </div>

                            <div class="text-sm font-semibold text-gray-800">
                                {{ formatPrice(item.product.price * item.quantity) }}
                            </div>
                        </div>

                        <!-- Summary -->
                        <div class="space-y-2 border-t border-gray-300 pt-4 text-sm">
                            <div class="flex justify-between">
                                <span>{{ $t('order.totalPrice') }}</span>
                                <span>{{ formatPrice(subTotal) }}</span>
                            </div>
                            <div class="flex justify-between">
                                <span>{{ $t('order.shipping') }}</span>
                                <span>0đ</span>
                            </div>
                        </div>

                        <div class="flex items-center justify-between border-t border-gray-300 pt-4">
                            <span class="font-semibold">
                                {{ $t('order.finalPrice') }}
                            </span>
                            <span class="text-xl font-bold text-gray-800">
                                {{ formatPrice(totalPrice) }}
                            </span>
                        </div>

                        <button
                            class="mt-4 w-full rounded-lg bg-gray-700 py-3 font-semibold text-white hover:bg-gray-800"
                        >
                            {{ $t('cart.checkout') }}
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <footer class="mt-12 border-t border-gray-300 py-6 text-center text-sm text-gray-500">
            {{ $t('checkout.thankyou') }}
        </footer>
    </div>
</template>

<script>
import { useCartStore } from '@/stores/cart'
import { mapStores } from 'pinia'
import { useAuthStore } from '@/stores/auth'
import { apiHelper } from '@/helpers/axios'

export default {
    name: 'CheckoutView',

    data() {
        return {
            cartStore: useCartStore(),

            // address
            listAddress: [],
            selectedAddressId: 'other',

            // form
            form: {
                email: '',
                fullName: '',
                phone: '',
                address: '',
                province: '',
                district: '',
                ward: '',
            },
        }
    },

    computed: {
        ...mapStores(useAuthStore),

        totalQuantity() {
            return this.cartStore.products.reduce((sum, p) => sum + p.quantity, 0)
        },

        subTotal() {
            return this.cartStore.products.reduce((sum, p) => sum + p.product.price * p.quantity, 0)
        },

        totalPrice() {
            return this.subTotal
        },
    },

    watch: {
        selectedAddressId(newVal) {
            if (newVal === 'other') {
                this.resetForm()
            } else {
                const addr = this.listAddress.find((a) => a.id === newVal)
                if (addr) this.fillForm(addr)
            }
        },

        'authStore.currentUser': {
            immediate: true,
            handler(user) {
                if (user) {
                    this.form.email = user.email || ''
                    this.form.fullName = user.name || ''
                }
            },
        },
    },

    mounted() {
        this.fetchListAddress()
        this.form.email = this.authStore.currentUser?.email || ''
    },

    methods: {
        formatPrice(n) {
            return (Number(n) || 0).toLocaleString('de-DE') + 'đ'
        },

        fetchListAddress() {
            apiHelper
                .get('/address/list-address', {
                    headers: {
                        Authorization: 'Bearer ' + this.authStore.currentUser.token,
                    },
                    params: { limit: 20 },
                })
                .then((res) => {
                    if (res.status === 200) {
                        this.listAddress = res.data.data
                    }
                })
        },

        fillForm(addr) {
            this.form.fullName = addr.full_name || ''
            this.form.phone = addr.phone || ''
            this.form.address = addr.addresses || ''
            this.form.province = addr.province || ''
            this.form.district = addr.district || ''
            this.form.ward = addr.ward || ''
        },

        resetForm() {
            this.form.fullName = ''
            this.form.phone = ''
            this.form.address = ''
            this.form.province = ''
            this.form.district = ''
            this.form.ward = ''
        },
    },
}
</script>
