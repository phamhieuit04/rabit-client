import { apiHelper } from '@/helpers/axios'
import { defineStore } from 'pinia'

export const useCategoriesStore = defineStore('categories', {
    state: () => {
        return {
            currentCategory: null,
            listCategory: [],
        }
    },
    actions: {
        fetchListCategory() {
            apiHelper
                .get('/list-category')
                .then((res) => {
                    if (res.status === 200) {
                        this.listCategory = res.data.data
                        console.log(res.data.data)
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        },
    },
    persist: true,
})
