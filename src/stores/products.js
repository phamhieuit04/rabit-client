import { apiHelper } from '@/helpers/axios'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
    state: () => {
        return {
            currentProduct: null,
            previewProduct: null,
            previewImage: '',
            listProduct: [],
            similarProducts: [],
            hasMoreProducts: true,
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
                        const newProducts = res.data.data

                        if (offset == 0) {
                            this.listProduct = newProducts
                        } else {
                            newProducts.forEach((product) => {
                                this.listProduct.push(product)
                            })
                        }

                        this.hasMoreProducts = newProducts.length >= limit
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
        fetchSimilarProducts(productId) {
            apiHelper
                .get('/product/similar-products/' + productId, {
                    params: {
                        limit: 4,
                    },
                })
                .then((res) => {
                    if (res.status == 200) {
                        this.similarProducts = res.data.data
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        setCurrentProduct(product) {
            this.currentProduct = product
        },
        setPreviewProduct(product) {
            this.previewProduct = product
        },
        setPreviewImage(image) {
            this.previewImage = image
        },
    },
    persist: true,
})
