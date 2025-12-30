<script setup>
import { MapPin, Phone } from 'lucide-vue-next'
</script>

<template>
    <div class="container mx-auto max-w-7xl px-4 py-16">
        <h1 class="mb-8 text-center text-4xl font-medium" style="font-family: 'Cormorant Garamond'">
            {{ $t('stores.title') }}
        </h1>

        <!-- Filter Section -->
        <div class="mb-8 flex gap-4">
            <select
                class="flex-1 cursor-pointer rounded-md border border-gray-300 px-4 py-3 focus:border-gray-500 focus:outline-none"
            >
                <option>{{ $t('stores.selectProvince') }}</option>
                <option>Hà Nội</option>
                <option>Hồ Chí Minh</option>
                <option>Hải Phòng</option>
            </select>
            <select
                class="flex-1 cursor-pointer rounded-md border border-gray-300 px-4 py-3 focus:border-gray-500 focus:outline-none"
            >
                <option>{{ $t('stores.selectDistrict') }}</option>
                <option>Quận Đống Đa</option>
                <option>Quận Tây Hồ</option>
                <option>Quận Lê Chân</option>
            </select>
            <select
                class="flex-1 cursor-pointer rounded-md border border-gray-300 px-4 py-3 focus:border-gray-500 focus:outline-none"
            >
                <option>{{ $t('stores.selectWard') }}</option>
                <option>Phường Khương Thượng</option>
                <option>Phường Quán Ngựa</option>
                <option>Phường Kênh Dương</option>
            </select>
        </div>

        <!-- Store List and Map Grid -->
        <div class="grid grid-cols-2 gap-8">
            <!-- Store List -->
            <div class="space-y-6">
                <!-- Store Item 1 -->
                <div class="rounded-xl bg-[#faf2e6] p-6">
                    <h2 class="mb-4 text-xl font-bold">Rabit Studio Hà Nội</h2>
                    <div class="mb-3 flex items-start gap-2">
                        <MapPin class="mt-1 shrink-0" size="20" color="#5c5c5c" />
                        <p class="text-gray-700">Số 7 ngõ 379 Hoàng Hoa Thám, Đống Đa, Hà Nội</p>
                    </div>
                    <div class="flex items-center gap-2">
                        <Phone size="20" color="#5c5c5c" />
                        <p class="text-gray-700">0823674046</p>
                    </div>
                </div>

                <!-- Store Item 2 -->
                <div class="rounded-xl bg-[#faf2e6] p-6">
                    <h2 class="mb-4 text-xl font-bold">Rabit Studio Lotte Mall</h2>
                    <div class="mb-3 flex items-start gap-2">
                        <MapPin class="mt-1 shrink-0" size="20" color="#5c5c5c" />
                        <p class="text-gray-700">Tầng 4, Số 272 Võ Chí Công, Tây Hồ, Hà Nội</p>
                    </div>
                    <div class="flex items-center gap-2">
                        <Phone size="20" color="#5c5c5c" />
                        <p class="text-gray-700">0967285466</p>
                    </div>
                </div>

                <!-- Store Item 3 -->
                <div class="rounded-xl bg-[#faf2e6] p-6">
                    <h2 class="mb-4 text-xl font-bold">Rabit Studio Hải Phòng</h2>
                    <div class="mb-3 flex items-start gap-2">
                        <MapPin class="mt-1 shrink-0" size="20" color="#5c5c5c" />
                        <p class="text-gray-700">
                            Tầng 4, 10 đường Võ Nguyên Giáp, phường Kênh Dương, quận Lê Chân, Hải
                            Phòng
                        </p>
                    </div>
                    <div class="flex items-center gap-2">
                        <Phone size="20" color="#5c5c5c" />
                        <p class="text-gray-700">0817329583</p>
                    </div>
                </div>

                <!-- Store Item 4 -->
                <div class="rounded-xl bg-[#faf2e6] p-6">
                    <h2 class="mb-4 text-xl font-bold">Rabit Studio Sài Gòn</h2>
                    <div class="mb-3 flex items-start gap-2">
                        <MapPin class="mt-1 shrink-0" size="20" color="#5c5c5c" />
                        <p class="text-gray-700">Số 37D Võ Thị Sáu, Quận 3, Hồ Chí Minh</p>
                    </div>
                    <div class="flex items-center gap-2">
                        <Phone size="20" color="#5c5c5c" />
                        <p class="text-gray-700">0988765432</p>
                    </div>
                </div>
            </div>

            <!-- Map Placeholder -->
            <div class="sticky top-4 h-fit">
                <div class="overflow-hidden rounded-xl bg-gray-200">
                    <img
                        src="../assets/rabit_map.png"
                        alt="Map placeholder"
                        class="h-full w-full object-cover"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StoreLocations',
}
</script>
