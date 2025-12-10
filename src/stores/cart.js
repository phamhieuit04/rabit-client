import { apiHelper } from '@/helpers/axios'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => ({
        products: [],
    }),

    actions: {
        fetchCartItem() {
            return apiHelper.get('/list-product').then((res) => {
                if (res.status === 200) {
                    this.products = res.data.data.map((p) => ({
                        ...p,
                        quantity: p.quantity ?? 1,
                    }))
                }
            })
        },

        increaseQuantity(id) {
            const product = this.products.find((p) => p.id === id)
            if (product) product.quantity++
        },

        decreaseQuantity(id) {
            const product = this.products.find((p) => p.id === id)
            if (product && product.quantity > 1) product.quantity--
        },

        removeItem(id) {
            this.products = this.products.filter((p) => p.id !== id)
        },
    },

    persist: true,
})
