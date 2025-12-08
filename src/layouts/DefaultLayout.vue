<script setup>
import FooterComponent from '@/components/FooterComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
</script>

<template>
    <HeaderComponent />
    <slot />
    <FooterComponent />
</template>
