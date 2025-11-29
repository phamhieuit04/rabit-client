<script setup>
import {
    MapPin,
    MessageCircleQuestionMark,
    Search,
    ShoppingCart,
    CircleUser,
    CircleX,
    Minus,
    Plus,
    LogIn,
    UserPlus2,
} from 'lucide-vue-next'
</script>

<template>
    <div class="flex items-center justify-center">
        <div class="container mx-auto">
            <!-- Start main header -->
            <div class="flex items-center justify-between pt-6">
                <!-- Start left items -->
                <ul class="flex min-w-2xs items-center gap-8">
                    <li
                        v-for="item in leftItems"
                        class="flex cursor-pointer items-center justify-center gap-1.5 hover:opacity-75"
                    >
                        <component :is="item.icon" @click="item.onClick" />
                        <span>{{ item.title }}</span>
                    </li>
                </ul>
                <!-- End left items -->

                <h1 class="text-2xl font-bold uppercase">Rabit</h1>

                <!-- Start right items -->
                <ul class="flex min-w-2xs items-center justify-end">
                    <li v-for="item in rightItems" class="group cursor-pointer">
                        <div @click="item.onClick" class="relative px-3 pb-6 hover:opacity-75">
                            <component :is="item.icon" />
                        </div>

                        <!-- Start cart hover card  -->
                        <div
                            v-if="item.type == 'cart'"
                            class="absolute hidden min-h-80 w-96 -translate-x-[50%] cursor-default flex-col overflow-hidden rounded-md bg-white drop-shadow-2xl group-hover:flex group-hover:opacity-100"
                        >
                            <h1 class="border-b-2 border-gray-300 p-4 font-bold uppercase">
                                Giỏ hàng
                            </h1>
                            <ul
                                class="flex max-h-96 grow flex-col gap-10 overflow-hidden overflow-x-hidden overflow-y-scroll p-4"
                            >
                                <li v-for="i in 10" class="flex items-center gap-3">
                                    <img
                                        class="size-20 object-contain"
                                        src="https://bizweb.dktcdn.net/thumb/large/100/220/344/products/10-39e98532-986b-4c94-8883-8b5575d17b0b.jpg?v=1761619515263"
                                        alt=""
                                    />
                                    <div class="flex flex-col gap-4">
                                        <div class="flex">
                                            <p class="line-clamp-2 text-sm font-medium">
                                                Móc khoá Trộm vía Hotel Keychainn Keychainn
                                                Keychainn Keychainn Keychainn
                                            </p>
                                            <div
                                                class="flex size-10 shrink-0 cursor-pointer justify-end hover:opacity-75"
                                            >
                                                <CircleX color="gray" />
                                            </div>
                                        </div>
                                        <div class="flex justify-between">
                                            <div
                                                class="flex items-center justify-center rounded-sm outline outline-gray-300"
                                            >
                                                <div
                                                    class="flex size-6 cursor-pointer items-center justify-center rounded-tl-sm rounded-bl-sm outline outline-gray-300 hover:bg-[#f1f1f1]"
                                                >
                                                    <Minus size="12" />
                                                </div>
                                                <span class="w-8 text-center text-sm font-semibold">
                                                    1
                                                </span>
                                                <div
                                                    class="flex size-6 cursor-pointer items-center justify-center rounded-tr-sm rounded-br-sm outline outline-gray-300 hover:bg-[#f1f1f1]"
                                                >
                                                    <Plus size="12" />
                                                </div>
                                            </div>
                                            <p class="font-medium">50.000đ</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div class="flex justify-between bg-[#f8f8f8] p-4">
                                <div>
                                    <h1 class="font-medium">Tổng tiền</h1>
                                    <p class="text-xl font-semibold">50.000đ</p>
                                </div>
                                <button
                                    class="cursor-pointer rounded-md bg-[#5c5c5c] px-6 py-2 text-white hover:opacity-75"
                                >
                                    Thanh toán
                                </button>
                            </div>
                        </div>
                        <!-- End cart hover card -->

                        <!-- Start profile hover card -->
                        <div
                            v-if="item.type == 'profile'"
                            class="absolute hidden min-h-12 w-60 -translate-x-[50%] cursor-default flex-col overflow-hidden rounded-md bg-white drop-shadow-2xl group-hover:flex group-hover:opacity-100"
                        >
                            <ul class="flex flex-col gap-4 p-4">
                                <li
                                    class="flex cursor-pointer items-center justify-start gap-1.5 rounded-md p-1 hover:bg-[#838380] hover:text-white"
                                >
                                    <div class="flex size-8 items-center justify-center">
                                        <LogIn />
                                    </div>
                                    <span>Đăng nhập</span>
                                </li>
                                <li
                                    class="flex cursor-pointer items-center justify-start gap-1.5 rounded-md p-1 hover:bg-[#838380] hover:text-white"
                                >
                                    <div class="flex size-8 items-center justify-center">
                                        <UserPlus2 />
                                    </div>
                                    <span>Đăng ký </span>
                                </li>
                            </ul>
                        </div>
                        <!-- End profile hover card -->
                    </li>
                </ul>
                <!-- End right items -->
            </div>
            <!-- End main header -->

            <!-- Start list category -->
            <ul class="flex items-center justify-center py-6">
                <li class="cursor-pointer">
                    <span class="text-md px-3 font-medium hover:opacity-75">Trang chủ</span>
                </li>
                <li v-for="item in listCategory" class="group cursor-pointer">
                    <span class="text-md relative px-3 pb-8 font-medium hover:opacity-75">
                        {{ item.name }}
                    </span>
                    <ul
                        class="absolute z-10 mt-4 hidden min-h-52 min-w-96 -translate-x-[50%] transform cursor-default grid-cols-2 gap-4 rounded-md bg-white px-6 py-4 drop-shadow-2xl duration-200 group-hover:grid group-hover:opacity-100"
                    >
                        <li v-for="child in item.children" class="cursor-pointer hover:opacity-75">
                            <span>{{ child.name }}</span>
                        </li>
                    </ul>
                </li>
            </ul>
            <!-- End list category -->
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
                    type: 'search',
                    onClick: () => {
                        alert('Day la tim kiem')
                    },
                },
                {
                    icon: ShoppingCart,
                    type: 'cart',
                    onClick: () => {
                        alert('Day la gio hang')
                    },
                },
                {
                    icon: CircleUser,
                    type: 'profile',
                    onClick: () => {},
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
