import { apiHelper } from '@/helpers/axios'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
    state: () => {
        return {
            currentProduct: null,
            currentImage: '',
            listProduct: [],
        }
    },
    actions: {
        fetchListProduct(offset = 0, limit = 8, categoryId = null, searchKey = null, sortType) {
            apiHelper
                .get('/list-product', {
                    params: {
                        offset: offset,
                        limit: limit,
                        category_id: categoryId,
                        search_key: searchKey,
                        sort_type: sortType,
                    },
                })
                .then((res) => {
                    if (res.status == 200) {
                        if (offset == 0) {
                            this.listProduct = res.data.data
                        } else {
                            res.data.data.forEach((product) => {
                                this.listProduct.push(product)
                            })
                        }
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        fetchCurrentProduct(productId) {
            apiHelper
                .get('/product/show/' + productId)
                .then((res) => {
                    if (res.status == 200) {
                        this.currentProduct = res.data.data
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        setCurrentProduct(product) {
            this.currentProduct = product
        },
        setCurrentImage(image) {
            this.currentImage = image
        },
    },
    persist: true,
})
