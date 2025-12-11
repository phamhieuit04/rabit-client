import { apiHelper } from '@/helpers/axios'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => ({
        products: [],
    }),

    actions: {
        fetchCartItem() {
            return apiHelper
                .get('/cart/list-product', {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
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

        deleteItem(productId) {
            return apiHelper
                .get('/cart/update-product', {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
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
    },

    persist: true,
})
