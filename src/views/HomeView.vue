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

    <!-- Start quote -->
    <div class="container mx-auto flex max-w-7xl flex-col items-center justify-center gap-12 py-16">
        <div class="flex max-w-[800px] flex-col items-center justify-center">
            <h1 class="pb-6 text-4xl font-medium" style="font-family: 'Cormorant Garamond'">
                {{ $t('quote.title') }}
            </h1>
            <p class="text-center">{{ $t('quote.detail') }}</p>
        </div>

        <ul class="grid w-full grid-cols-4 items-center justify-center gap-5">
            <li
                v-for="item in featuredCategories"
                class="group relative flex h-32 items-center justify-center bg-[#fefdf9]"
            >
                <h1 class="font-medium">{{ item.name }}</h1>
                <button
                    class="absolute translate-y-10 transform cursor-pointer rounded-md bg-white px-6 py-2 duration-200 group-hover:translate-0 group-hover:bg-[#5c5c5c] hover:bg-[#838383]"
                >
                    <h1 class="font-medium text-gray-500 uppercase group-hover:text-white">
                        {{ $t('product.buyNow') }}
                    </h1>
                </button>
            </li>
        </ul>
    </div>
    <!-- End quoto -->

    <!-- Start images parallax -->
    <ul class="container mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 py-16">
        <li
            v-for="item in imagesParallax"
            class="relative h-[450px] w-full overflow-hidden rounded-4xl bg-cover bg-fixed bg-center bg-no-repeat text-white"
            :style="{ backgroundImage: 'url(' + item.image_url + ')' }"
        >
            <div class="h-full w-full backdrop-brightness-75">
                <div class="flex h-full flex-col justify-between p-12">
                    <p class="font-medium uppercase">{{ item.sub_title }}</p>
                    <div class="flex max-w-[40%] flex-col gap-2">
                        <h1
                            class="text-4xl font-semibold"
                            style="font-family: 'Cormorant Garamond'"
                        >
                            {{ item.title }}
                        </h1>
                        <p class="text-gray-300">{{ item.description }}</p>
                    </div>
                </div>
            </div>
        </li>
    </ul>
    <!-- End images parallax -->

    <!-- Start contact card -->
    <div
        class="container mx-auto my-12 flex h-[600px] w-full max-w-7xl justify-between rounded-4xl bg-[#f4f4f4] p-4"
    >
        <div class="flex w-full max-w-[45%] flex-col items-center justify-center gap-4 p-16">
            <h1 class="text-4xl font-medium" style="font-family: 'Cormorant Garamond'">
                Instagram
            </h1>
            <p class="text-justify text-gray-600">{{ $t('contact.description') }}</p>
            <button
                class="cursor-pointer self-start rounded-md bg-[#5c5c5c] px-6 py-2 text-white hover:opacity-75"
            >
                {{ $t('contact.follow') }} <span>@Rabit</span>
            </button>
        </div>
        <div class="grid grid-cols-3 gap-4 overflow-hidden">
            <ul class="flex flex-col gap-4 overflow-hidden rounded-xl">
                <li
                    v-for="item in imagesContact[0]"
                    class="flex h-96 w-54 shrink-0 -translate-y-32 items-center justify-center overflow-hidden rounded-xl"
                >
                    <img class="h-full w-full object-cover" :src="item.image_url" alt="" />
                </li>
            </ul>
            <ul class="flex flex-col gap-4 overflow-hidden rounded-xl">
                <li
                    v-for="item in imagesContact[1]"
                    class="flex h-96 w-54 shrink-0 items-center justify-center overflow-hidden rounded-xl"
                >
                    <img class="h-full w-full object-cover" :src="item.image_url" alt="" />
                </li>
            </ul>
            <ul class="flex flex-col gap-4 overflow-hidden rounded-xl">
                <li
                    v-for="item in imagesContact[2]"
                    class="flex h-96 w-54 shrink-0 -translate-y-32 items-center justify-center overflow-hidden rounded-xl"
                >
                    <img class="h-full w-full object-cover" :src="item.image_url" alt="" />
                </li>
            </ul>
        </div>
    </div>
    <!-- End contact card -->
</template>

<script>
export default {
    data() {
        return {
            featuredCategories: [
                {
                    name: 'Notebook',
                    thumbnail_url:
                        'https://bizweb.dktcdn.net/100/220/344/themes/1030367/assets/slider_2.jpg?1763605000974',
                },
                {
                    name: 'Notebook',
                    thumbnail_url:
                        'https://bizweb.dktcdn.net/100/220/344/themes/1030367/assets/slider_4.jpg?1763605000974',
                },
                {
                    name: 'Notebook',
                    thumbnail_url:
                        'https://bizweb.dktcdn.net/100/220/344/themes/1030367/assets/slider_2.jpg?1763605000974',
                },
                {
                    name: 'Notebook',
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
            imagesParallax: [
                {
                    image_url:
                        'https://bizweb.dktcdn.net/100/220/344/themes/1030367/assets/image-parallax-1.jpg?1763605000974',
                    sub_title: 'Stationery',
                    title: 'Elit laboris minim.',
                    description:
                        'Quis sit amet nulla reprehenderit occaecat nostrud velit consectetur in non. Dolor ullamco exercitation non commodo et cillum ad qui elit in Lorem non do. Deserunt voluptate reprehenderit amet Lorem. Adipisicing voluptate cupidatat culpa cupidatat duis.',
                },
                {
                    image_url:
                        'https://bizweb.dktcdn.net/100/220/344/themes/1030367/assets/image-parallax-2.jpg?1763605000974',
                    sub_title: 'Stationery',
                    title: 'Elit laboris minim.',
                    description:
                        'Quis sit amet nulla reprehenderit occaecat nostrud velit consectetur in non. Dolor ullamco exercitation non commodo et cillum ad qui elit in Lorem non do. Deserunt voluptate reprehenderit amet Lorem. Adipisicing voluptate cupidatat culpa cupidatat duis.',
                },
                {
                    image_url:
                        'https://bizweb.dktcdn.net/100/220/344/themes/1030367/assets/image-parallax-3.jpg?1763605000974',
                    sub_title: 'Stationery',
                    title: 'Elit laboris minim.',
                    description:
                        'Quis sit amet nulla reprehenderit occaecat nostrud velit consectetur in non. Dolor ullamco exercitation non commodo et cillum ad qui elit in Lorem non do. Deserunt voluptate reprehenderit amet Lorem. Adipisicing voluptate cupidatat culpa cupidatat duis.',
                },
            ],
            imagesContact: [
                [
                    {
                        image_url:
                            'https://bizweb.dktcdn.net/100/220/344/themes/1030367/assets/img_cus_1.jpg?1763605000974',
                    },
                    {
                        image_url:
                            'https://bizweb.dktcdn.net/100/220/344/themes/1030367/assets/img_cus_2.jpg?1763605000974',
                    },
                    {
                        image_url:
                            'https://bizweb.dktcdn.net/100/220/344/themes/1030367/assets/img_cus_3.jpg?1763605000974',
                    },
                ],
                [
                    {
                        image_url:
                            'https://bizweb.dktcdn.net/100/220/344/themes/1030367/assets/img_cus_4.jpg?1763605000974',
                    },
                    {
                        image_url:
                            'https://bizweb.dktcdn.net/100/220/344/themes/1030367/assets/img_cus_3.jpg?1763605000974',
                    },
                    {
                        image_url:
                            'https://bizweb.dktcdn.net/100/220/344/themes/1030367/assets/img_cus_1.jpg?1763605000974',
                    },
                ],
                [
                    {
                        image_url:
                            'https://bizweb.dktcdn.net/100/220/344/themes/1030367/assets/img_cus_5.jpg?1763605000974',
                    },
                    {
                        image_url:
                            'https://bizweb.dktcdn.net/100/220/344/themes/1030367/assets/img_cus_6.jpg?1763605000974',
                    },
                    {
                        image_url:
                            'https://bizweb.dktcdn.net/100/220/344/themes/1030367/assets/img_cus_2.jpg?1763605000974',
                    },
                ],
            ],
        }
    },
}
</script>
