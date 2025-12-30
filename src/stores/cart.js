import { apiHelper } from '@/helpers/axios'
import { defineStore } from 'pinia'
import { useAuthStore } from './auth'
import { i18n } from '@/main'

export const useCartStore = defineStore('cart', {
    state: () => ({
        products: [],
    }),

    actions: {
        async fetchCartItem() {
            const authStore = useAuthStore()
            return await apiHelper
                .get('/cart/list-product', {
                    headers: {
                        Authorization: 'Bearer ' + authStore.currentUser.token,
                    },
                })
                .then((res) => {
                    if (res.status === 200) {
                        this.products = res.data.data.map((p) => ({
                            ...p,
                            quantity: p.quantity ?? 1,
                        }))
                    }
                })
        },

        increaseQuantity(productId) {
            const item = this.products.find((p) => p.product.id === productId)
            if (item) item.quantity++
        },

        decreaseQuantity(productId) {
            const item = this.products.find((p) => p.product.id === productId)
            if (item && item.quantity > 1) item.quantity--
        },

        removeItem(productId) {
            this.products = this.products.filter((p) => p.product.id !== productId)
        },

        async deleteItem(productId) {
            const authStore = useAuthStore()
            return await apiHelper
                .get('/cart/update-product', {
                    headers: {
                        Authorization: 'Bearer ' + authStore.currentUser.token,
                    },
                    params: {
                        product_id: productId,
                        update_type: 'delete',
                    },
                })
                .then((res) => {
                    if (res.status === 200) {
                        this.removeItem(productId)
                    }
                })
        },

        async addToCart(productId, quantity) {
            const authStore = useAuthStore()
            if (!authStore.isLoggedIn) {
                alert(i18n.global.t('cart.shouldLogin'))
                return
            }
            return await apiHelper
                .get('/cart/update-product', {
                    headers: {
                        Authorization: 'Bearer ' + authStore.currentUser.token,
                    },
                    params: {
                        product_id: productId,
                        update_type: 'add',
                        quantity: quantity,
                    },
                })
                .then((res) => {
                    if (res.status === 200) {
                        alert(i18n.global.t('cart.addToCartSuccess'))
                        this.fetchCartItem()
                    }
                })
                .catch((err) => {
                    alert(i18n.global.t('cart.addToCartFail'))
                })
        },
    },

    persist: true,
})
