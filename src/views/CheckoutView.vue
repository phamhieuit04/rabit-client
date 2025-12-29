<template>
    <div class="bg-white">
        <!-- Content -->
        <main class="mx-auto max-w-7xl py-8">
            <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <!-- Left -->
                <div class="space-y-8 lg:col-span-2">
                    <!-- Thông tin nhận hàng -->
                    <section class="space-y-4">
                        <h2 class="text-lg font-semibold">{{ $t('checkout.shippingInfo') }}</h2>

                        <div class="space-y-3">
                            <!-- Select địa chỉ -->
                            <select
                                v-model="selectedAddressId"
                                class="w-full rounded-md border px-3 py-2 text-sm"
                            >
                                <option value="other">{{ $t('checkout.anotherAddress') }}...</option>

                                <option v-for="item in listAddress" :key="item.id" :value="item.id">
                                    {{ item.addresses }} - {{ item.phone }}
                                </option>
                            </select>

                            <!-- Email -->
                            <input
                                type="email"
                                disabled
                                v-model="form.email"
                                placeholder="Email"
                                class="w-full rounded-md border bg-gray-100 px-3 py-2 text-sm"
                            />

                            <!-- Họ tên -->
                            <input
                                type="text"
                                v-model="form.fullName"
                                placeholder="Họ và tên"
                                class="w-full rounded-md border px-3 py-2 text-sm"
                            />

                            <!-- Phone -->
                            <div class="flex gap-2">
                                <select class="w-20 rounded-md border px-2 py-2 text-sm">
                                    <option>🇻🇳 +84</option>
                                </select>
                                <input
                                    type="text"
                                    v-model="form.phone"
                                    :placeholder="$t('address.phone')"
                                    class="flex-1 rounded-md border px-3 py-2 text-sm"
                                />
                            </div>

                            <!-- Address -->
                            <input
                                type="text"
                                v-model="form.address"
                                :placeholder="$t('address.yourAddress')"
                                class="w-full rounded-md border px-3 py-2 text-sm"
                            />
                        </div>
                    </section>

                    <!-- Thanh toán -->
                    <section class="space-y-3">
                        <h2 class="text-lg font-semibold">{{ $t('paymentMethods.payment') }}</h2>
                        <div class="space-y-2">
                            <label
                                class="flex cursor-pointer items-center gap-3 rounded-md border px-4 py-3 text-sm"
                            >
                                <input type="radio" name="payment" />
                                <span>{{ $t('paymentMethods.cod') }}</span>
                            </label>
                            <label
                                class="flex cursor-pointer items-center gap-3 rounded-md border px-4 py-3 text-sm"
                            >
                                <input type="radio" name="payment" />
                                <span>{{ $t('paymentMethods.online') }}</span>
                            </label>
                        </div>
                    </section>
                </div>

                <!-- Right -->
                <aside class="space-y-6">
                    <div class="space-y-4 rounded-md border p-4">
                        <h3 class="font-semibold">{{ $t('order.title') }} ({{ totalQuantity }} {{ $t('products.title1') }})</h3>

                        <!-- Item -->
                        <div
                            v-for="item in cartStore.products"
                            :key="item.product.id"
                            class="flex gap-3"
                        >
                            <div
                                class="flex h-14 w-14 items-center justify-center overflow-hidden rounded border"
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
                                <p class="line-clamp-2 font-medium">
                                    {{ item.product.name }}
                                </p>
                                <p class="text-xs text-gray-500">{{ $t('order.qty') }}: {{ item.quantity }}</p>
                            </div>

                            <div class="text-sm font-medium">
                                {{ formatPrice(item.product.price * item.quantity) }}
                            </div>
                        </div>

                        <!-- Tổng -->
                        <div class="space-y-2 border-t pt-3 text-sm">
                            <div class="flex justify-between">
                                <span>{{ $t('order.totalPrice') }}</span>
                                <span>{{ formatPrice(subTotal) }}</span>
                            </div>
                            <div class="flex justify-between">
                                <span>{{ $t('order.shipping') }}</span>
                                <span>0đ</span>
                            </div>
                        </div>

                        <div class="flex items-center justify-between border-t pt-3">
                            <span class="font-semibold">{{ $t('order.finalPrice') }}</span>
                            <span class="text-xl font-bold">
                                {{ formatPrice(totalPrice) }}
                            </span>
                        </div>

                        <button class="w-full rounded-md bg-black py-3 font-semibold text-white cursor-pointer">
                            {{ $t('cart.checkout') }}
                        </button>
                    </div>
                </aside>
            </div>
        </main>

        <!-- Footer -->
        <footer class="border-t py-6 text-center text-sm text-gray-500">
            <p class="mt-2">{{ $t('checkout.thankyou') }}.</p>
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
