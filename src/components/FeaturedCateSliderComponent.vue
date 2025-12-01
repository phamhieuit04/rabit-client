<script setup>
import '@splidejs/vue-splide/css'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
</script>

<template>
    <Splide :options="carouselOptions">
        <SplideSlide v-for="item in categories">
            <img :src="item.thumbnail_url" class="h-full w-full" />
        </SplideSlide>
    </Splide>
</template>

<script>
export default {
    props: ['categories'],
    data() {
        return {
            carouselOptions: {
                rewind: true,
                rewindByDrag: true,
                maxWidth: screen.width,
                maxHeight: screen.height,
                autoplay: true,
                interval: 5000,
                speed: 800,
                lazyLoad: 'nearby',
                preloadPages: 3,
            },
        }
    },
}
</script>
