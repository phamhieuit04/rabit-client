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
        dontHaveAccount: string
        loginSuccess: string
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
        productInfo: string
        price: string
        quantity: string
        totalPrice: string
        continueShopping: string
        addToCartSuccess: string
        addToCartFail: string
        emptyCart: string
    }
    search: {
        placeholder: string
        featuredCategories: string
    }
    products: {
        title: string
        title1: string
        title2: string
        showAll: string
        showMore: string
        empty: string
        allProduct: string
        sortBy: string
        sortType: {
            default: string
            newest: string
            bestSeller: string
            priceLowToHigh: string
            priceHighToLow: string
        }
        noProducts: string
        tryDifferentSearch: string
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
        subtitle: string
        address: string
        formTitle: string
        name: string
        email: string
        phone: string
        message: string
        submit: string
    }
    profile: {
        title: string
        hello: string
        accountInfo: string
        yourOrder: string
        address: string
    }
    order: {
        title: string
        date: string
        totalPrice: string
        paymentStatus: string
        emptyOrder: string
        code: string
        status: string
        qty: string
        shipping: string
        finalPrice: string
    }
    address: {
        addressBook: string
        yourAddress: string
        phone: string
        saveAddress: string
        emptyAddress: string
    }
    checkout: {
        shippingInfo: string
        anotherAddress: string
        thankyou: string
    }
    paymentMethods: {
        payment: string
        cod: string
        online: string
    }
    stores: {
        title: string
        selectProvince: string
        selectDistrict: string
        selectWard: string
    }
}
