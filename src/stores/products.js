import { apiHelper } from '@/helpers/axios'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
    state: () => {
        return {
            listProduct: [],
        }
    },
    actions: {
        fetchListProduct(
            offset = 0,
            limit = 8,
            categoryId = null,
            sortType = null,
            searchKey = null,
        ) {
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
    },
    persist: true,
})
