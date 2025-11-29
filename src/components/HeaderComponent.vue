<script setup>
import {
    MapPin,
    MessageCircleQuestionMark,
    Search,
    ShoppingCart,
    CircleUser,
} from 'lucide-vue-next'
</script>

<template>
    <div class="flex items-center justify-center">
        <div class="container mx-auto">
            <div class="flex items-center justify-between pt-6">
                <ul class="flex min-w-2xs items-center gap-8">
                    <li
                        v-for="item in leftItems"
                        @click="item.onClick"
                        class="flex cursor-pointer items-center justify-center gap-1.5 hover:opacity-75"
                    >
                        <component :is="item.icon" />
                        <span>{{ item.title }}</span>
                    </li>
                </ul>
                <h1 class="text-2xl font-bold uppercase">Rabit</h1>
                <ul class="flex min-w-2xs items-center justify-end gap-4">
                    <li
                        v-for="item in rightItems"
                        @click="item.onClick"
                        class="flex cursor-pointer items-center justify-center gap-1 hover:opacity-75"
                    >
                        <component :is="item.icon" />
                    </li>
                </ul>
            </div>
            <ul class="flex items-center justify-center py-6">
                <li class="cursor-pointer">
                    <span class="text-md px-3 font-medium hover:opacity-75">Trang chủ</span>
                </li>
                <li v-for="item in listCategory" class="group cursor-pointer">
                    <span class="text-md relative px-3 pb-8 font-medium hover:opacity-75">
                        {{ item.name }}
                    </span>
                    <ul
                        class="absolute z-10 mt-4 hidden min-h-52 min-w-96 -translate-x-[50%] transform cursor-default grid-cols-2 gap-4 rounded-md bg-white px-6 py-4 shadow-xl outline-2 outline-gray-300 duration-200 group-hover:grid group-hover:opacity-100"
                    >
                        <li v-for="child in item.children" class="cursor-pointer hover:opacity-75">
                            <span>{{ child.name }}</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            leftItems: [
                {
                    icon: MapPin,
                    title: 'Cửa hàng',
                    onClick: () => {
                        alert('Day la cua hang')
                    },
                },
                {
                    icon: MessageCircleQuestionMark,
                    title: 'Liên hệ',
                    onClick: () => {
                        alert('Day la lien he')
                    },
                },
            ],
            rightItems: [
                {
                    icon: Search,
                    onClick: () => {
                        alert('Day la tim kiem')
                    },
                },
                {
                    icon: ShoppingCart,
                    onClick: () => {
                        alert('Day la gio hang')
                    },
                },
                {
                    icon: CircleUser,
                    onClick: () => {
                        alert('Day la ho so')
                    },
                },
            ],
            listCategory: [
                {
                    name: 'Sổ tay',
                    children: [
                        {
                            name: 'Sổ kẻ ngang',
                        },
                        {
                            name: 'Sổ chấm',
                        },
                        {
                            name: 'Sổ chấm',
                        },
                        {
                            name: 'Sổ chấm',
                        },
                        {
                            name: 'Sổ chấm',
                        },
                        {
                            name: 'Sổ chấm',
                        },
                        {
                            name: 'Sổ chấm',
                        },
                        {
                            name: 'Sổ chấm',
                        },
                        {
                            name: 'Sổ chấm',
                        },
                        {
                            name: 'Sổ chấm',
                        },
                        {
                            name: 'Sổ chấm',
                        },
                        {
                            name: 'Sổ chấm',
                        },
                        {
                            name: 'Sổ chấm',
                        },
                        {
                            name: 'Sổ chấm',
                        },
                        {
                            name: 'Sổ chấm',
                        },
                        {
                            name: 'Sổ chấm',
                        },
                        {
                            name: 'Sổ chấm',
                        },
                        {
                            name: 'Sổ chấm',
                        },
                        {
                            name: 'Sổ chấm',
                        },
                        {
                            name: 'Sổ chấm',
                        },
                        {
                            name: 'Sổ chấm',
                        },
                    ],
                },
                {
                    name: 'Sổ tay',
                    children: [
                        {
                            name: 'Vở kẻ ngang',
                        },
                        {
                            name: 'Vở chấm',
                        },
                    ],
                },
                {
                    name: 'Sổ tay',
                    children: [
                        {
                            name: 'Sổ kẻ ngang',
                        },
                        {
                            name: 'Sổ chấm',
                        },
                    ],
                },
                {
                    name: 'Sổ tay',
                    children: [
                        {
                            name: 'Sổ kẻ ngang',
                        },
                        {
                            name: 'Sổ chấm',
                        },
                    ],
                },
                {
                    name: 'Sổ tay',
                    children: [
                        {
                            name: 'Sổ kẻ ngang',
                        },
                        {
                            name: 'Sổ chấm',
                        },
                    ],
                },
            ],
        }
    },
}
</script>
