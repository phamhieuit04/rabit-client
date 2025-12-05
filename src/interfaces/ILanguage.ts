export interface ILanguage {
    header: {
        shop: String
        contact: String
        home: String
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
