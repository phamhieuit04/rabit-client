import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior(to, from, savedPosition) {
        return {
            top: 0,
        }
    },
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/HomeView.vue'),
        },
        {
            path: '/products',
            name: 'products',
            component: () => import('../views/ProductsView.vue'),
        },
        {
            path: '/products/:id',
            name: 'product detail',
            component: () => import('../views/ProductDetailView.vue'),
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('../views/RegisterView.vue'),
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/LoginView.vue'),
        },
        {
            path: '/profile',
            name: 'profile',
            component: () => import('../views/ProfileView.vue'),
            children: [
                {
                    path: 'account',
                    component: () => import('../components/AccountInfoComponent.vue'),
                },
                {
                    path: 'orders',
                    component: () => import('../components/ListOrderComponent.vue'),
                },
            ],
        },
    ],
})

export default router
