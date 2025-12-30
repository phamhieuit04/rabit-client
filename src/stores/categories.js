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
        clearCurrentCategory() {
            this.currentCategory = null
        },
        setCurrentCategory(item) {
            this.currentCategory = item
        },
        fetchListCategory() {
            apiHelper
                .get('/list-category')
                .then((res) => {
                    if (res.status === 200) {
                        this.listCategory = res.data.data
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        },
    },
    persist: true,
})
