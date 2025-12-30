<script setup>
import ListProductComponent from '@/components/ListProductComponent.vue'
import { useCategoriesStore } from '@/stores/categories'
import { mapStores } from 'pinia'
</script>

<template>
    <div class="container mx-auto flex max-w-7xl flex-col items-center justify-center gap-12">
        <div
            v-show="categoriesStore.currentCategory != null"
            class="flex min-h-64 w-full max-w-7xl items-center justify-center bg-cover bg-center bg-no-repeat"
            :style="{
                backgroundImage: 'url(' + categoriesStore.currentCategory?.thumbnail_url + ')',
            }"
        >
            <h1 class="text-5xl font-semibold text-white" style="font-family: 'Cormorant Garamond'">
                {{ categoriesStore.currentCategory?.name }}
            </h1>
        </div>
        <ListProductComponent />
    </div>
</template>

<script>
export default {
    computed: {
        ...mapStores(useCategoriesStore),
    },
}
</script>
