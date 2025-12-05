import type { ILanguage } from '@/interfaces/ILanguage'

export const vi: ILanguage = {
    header: {
        shop: 'Cửa hàng',
        contact: 'Liên hệ',
        home: 'Trang chủ',
    },
    auth: {
        login: 'Đăng nhập',
        signup: 'Đăng ký',
        logout: 'Đăng xuất',
        here: 'tại đây',
        accountAlreadyExist: 'Đã có tài khoản, đăng nhập',
        namePlaceholder: 'Tên tài khoản',
        emailPlaceholder: 'Email',
        passwordPlaceholder: 'Mật khẩu',
        repasswordPlaceholder: 'Nhập lại mật khẩu',
        orLoginWith: 'Hoặc đăng nhập bằng',
        signupSuccess: 'Đăng ký tài khoản thành công! Bạn có thể đăng nhập và bắt đầu mua sắm',
        validateFail: 'Vui lòng điền đầy đủ thông tin',
        repasswordFail: 'Mật khẩu xác nhận chưa trùng khớp',
    },
    settings: {
        languages: 'Ngôn ngữ',
        english: 'Tiếng Anh',
        vietnamese: 'Tiếng Việt',
    },
    cart: {
        title: 'Giỏ hàng',
        totalBill: 'Tổng tiền',
        checkout: 'Thanh toán',
    },
    search: {
        placeholder: 'Tìm kiếm sản phẩm',
        featuredCategories: 'Danh mục nổi bật',
    },
}
