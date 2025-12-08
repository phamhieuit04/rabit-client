export interface ILanguage {
    header: {
        shop: string
        contact: string
        home: string
    }
    footer: {
        slogan: string
        about_crabit: string
        intro: string
        product_advantages: string
        inspiration: string
        customer_policy: string
        bulk_order: string
        personal_order: string
        newsletter: string
        newsletter_desc: string
    }
    auth: {
        login: String
        signup: String
        logout: String
        here: string
        accountAlreadyExist: string
        namePlaceholder: string
        emailPlaceholder: string
        passwordPlaceholder: string
        repasswordPlaceholder: string
        orLoginWith: string
        signupSuccess: string
        validateFail: string
        repasswordFail: string
    }
    settings: {
        languages: string
        english: string
        vietnamese: string
    }
    cart: {
        title: string
        totalBill: string
        checkout: string
    }
    search: {
        placeholder: string
        featuredCategories: string
    }
    products: {
        title: string
        title2: string
        showAll: string
    }
    product: {
        category: string
        addToCart: string
        description: string
        buyNow: string
    }
    quote: {
        title: string
        detail: string
    }
    contact: {
        description: string
        follow: string
    }
}
