<script setup>
import DefaultLayout from './layouts/DefaultLayout.vue'
import ProductQuickViewModal from './components/modals/ProductQuickViewModal.vue'
</script>

<template>
    <DefaultLayout>
        <RouterView />
    </DefaultLayout>

    <ProductQuickViewModal />
</template>
