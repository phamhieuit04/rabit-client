import type { ILanguage } from '@/interfaces/ILanguage'

export const en: ILanguage = {
    header: {
        shop: 'Shop',
        contact: 'Contact',
        home: 'Home',
    },
    auth: {
        login: 'Log in',
        signup: 'Sign up',
        logout: 'Log out',
        here: 'here',
        accountAlreadyExist: 'Already had an account? Login',
        namePlaceholder: 'Account name',
        emailPlaceholder: 'Email',
        passwordPlaceholder: 'Password',
        repasswordPlaceholder: 'Re-password',
        orLoginWith: 'Or login with',
        signupSuccess: 'Your account created successed! Please login for shopping',
        validateFail: 'Please fill all your information',
        repasswordFail: 'Password and Re-password must be the same!',
    },
    settings: {
        languages: 'Languages',
        english: 'English',
        vietnamese: 'Vietnamese',
    },
    cart: {
        title: 'Your cart',
        totalBill: 'Total bill',
        checkout: 'Checkout',
    },
    search: {
        placeholder: 'Search for everything',
        featuredCategories: 'Featured categories',
    },
}
