<script setup>
import FeaturedCateSliderComponent from '@/components/FeaturedCateSliderComponent.vue'
import ListProductComponent from '@/components/ListProductComponent.vue'
</script>

<template>
    <!-- Start image carousel -->
    <FeaturedCateSliderComponent :categories="featuredCategories" />
    <!-- End image carousel -->

    <!-- Start list product -->
    <ListProductComponent :listProduct="listProduct" />
    <!-- End list product -->
</template>

<script>
export default {
    data() {
        return {
            featuredCategories: [
                {
                    thumbnail_url:
                        'https://bizweb.dktcdn.net/100/220/344/themes/1030367/assets/slider_2.jpg?1763605000974',
                },
                {
                    thumbnail_url:
                        'https://bizweb.dktcdn.net/100/220/344/themes/1030367/assets/slider_4.jpg?1763605000974',
                },
            ],
            listProduct: [
                {
                    name: 'Sổ vẽ Sketchbook 190gsm Vuông A Few Notes - A Portrait Of You You You You You You You You You You You You',
                    price: '90.160₫',
                    image: 'https://bizweb.dktcdn.net/thumb/large/100/220/344/products/1-48af9730-94be-42ea-b1d1-fd382a3ac292.jpg?v=1761619558357',
                },
                {
                    name: 'Sổ vẽ Sketchbook 190gsm Vuông A Few Notes - A Portrait Of You',
                    price: '90.160₫',
                    image: 'https://bizweb.dktcdn.net/thumb/large/100/220/344/products/1-48af9730-94be-42ea-b1d1-fd382a3ac292.jpg?v=1761619558357',
                },
                {
                    name: 'Sổ vẽ Sketchbook 190gsm Vuông A Few Notes - A Portrait Of You',
                    price: '90.160₫',
                    image: 'https://bizweb.dktcdn.net/thumb/large/100/220/344/products/1-48af9730-94be-42ea-b1d1-fd382a3ac292.jpg?v=1761619558357',
                },
                {
                    name: 'Sổ vẽ Sketchbook 190gsm Vuông A Few Notes - A Portrait Of You',
                    price: '90.160₫',
                    image: 'https://bizweb.dktcdn.net/thumb/large/100/220/344/products/1-48af9730-94be-42ea-b1d1-fd382a3ac292.jpg?v=1761619558357',
                },
                {
                    name: 'Sổ vẽ Sketchbook 190gsm Vuông A Few Notes - A Portrait Of You',
                    price: '90.160₫',
                    image: 'https://bizweb.dktcdn.net/thumb/large/100/220/344/products/1-48af9730-94be-42ea-b1d1-fd382a3ac292.jpg?v=1761619558357',
                },
                {
                    name: 'Sổ vẽ Sketchbook 190gsm Vuông A Few Notes - A Portrait Of You',
                    price: '90.160₫',
                    image: 'https://bizweb.dktcdn.net/thumb/large/100/220/344/products/1-48af9730-94be-42ea-b1d1-fd382a3ac292.jpg?v=1761619558357',
                },
                {
                    name: 'Sổ vẽ Sketchbook 190gsm Vuông A Few Notes - A Portrait Of You',
                    price: '90.160₫',
                    image: 'https://bizweb.dktcdn.net/thumb/large/100/220/344/products/1-48af9730-94be-42ea-b1d1-fd382a3ac292.jpg?v=1761619558357',
                },
                {
                    name: 'Sổ vẽ Sketchbook 190gsm Vuông A Few Notes - A Portrait Of You',
                    price: '90.160₫',
                    image: 'https://bizweb.dktcdn.net/thumb/large/100/220/344/products/1-48af9730-94be-42ea-b1d1-fd382a3ac292.jpg?v=1761619558357',
                },
            ],
        }
    },
}
</script>
