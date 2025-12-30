<script setup>
import { MapPin, Phone, Mail } from 'lucide-vue-next'
</script>

<template>
    <div class="container mx-auto max-w-7xl px-4 py-16">
        <div class="grid grid-cols-2 gap-16">
            <!-- Left Column - Contact Info -->
            <div>
                <h1 class="mb-8 text-4xl font-medium" style="font-family: 'Cormorant Garamond'">
                    Rabit Notebuck
                </h1>

                <p class="mb-8 text-lg text-gray-700">
                    {{ $t('contact.subtitle') }}
                </p>

                <div class="mb-6 space-y-4">
                    <div class="flex items-start gap-3">
                        <MapPin class="mt-1 shrink-0" size="24" color="#5c5c5c" />
                        <div>
                            <p class="font-semibold text-gray-800">{{ $t('contact.address') }}</p>
                            <p class="text-gray-700">Số 7 ngõ 2 Quán Ngựa, Hà Nội.</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3">
                        <Phone class="mt-1 shrink-0" size="24" color="#5c5c5c" />
                        <div>
                            <p class="font-semibold text-gray-800">Hotline:</p>
                            <p class="text-gray-700">098 8782832</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3">
                        <Mail class="mt-1 shrink-0" size="24" color="#5c5c5c" />
                        <div>
                            <p class="font-semibold text-gray-800">Email:</p>
                            <p class="text-gray-700">ketoanngocanh01@gmail.com</p>
                        </div>
                    </div>
                </div>

                <h2 class="mb-6 text-2xl font-medium" style="font-family: 'Cormorant Garamond'">
                    {{ $t('contact.formTitle') }}
                </h2>

                <!-- Contact Form -->
                <form class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            :placeholder="$t('contact.name')"
                            class="rounded-md border border-gray-300 px-4 py-3 focus:border-gray-500 focus:outline-none"
                        />
                        <input
                            type="email"
                            :placeholder="$t('contact.email')"
                            class="rounded-md border border-gray-300 px-4 py-3 focus:border-gray-500 focus:outline-none"
                        />
                    </div>

                    <input
                        type="tel"
                        :placeholder="$t('contact.phone')"
                        class="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-gray-500 focus:outline-none"
                    />

                    <textarea
                        :placeholder="$t('contact.message')"
                        rows="6"
                        class="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-gray-500 focus:outline-none"
                    ></textarea>

                    <button
                        type="submit"
                        class="cursor-pointer rounded-md bg-[#5c5c5c] px-8 py-3 font-medium text-white hover:opacity-75"
                    >
                        {{ $t('contact.submit') }}
                    </button>
                </form>
            </div>

            <!-- Right Column - Map -->
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
    name: 'Contact',
}
</script>
