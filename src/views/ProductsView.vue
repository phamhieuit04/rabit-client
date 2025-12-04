<script setup>
import ListProductComponent from '@/components/ListProductComponent.vue'
import { mapStores } from 'pinia'
import { useProductsStore } from '@/stores/products'
</script>

<template>
    <div class="container mx-auto flex max-w-7xl flex-col items-center justify-center">
        <ListProductComponent />
    </div>
</template>

<script>
export default {
    computed: {
        ...mapStores(useProductsStore),
    },
}
</script>
