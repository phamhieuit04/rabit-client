export interface ILanguage {
    header: {
        shop: String
        contact: String
        home: String
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
    }
    settings: {
        languages: String
        english: String
        vietnamese: String
    }
    cart: {
        title: String
        totalBill: String
        checkout: String
    }
    search: {
        placeholder: String
        featuredCategories: String
    }
}
