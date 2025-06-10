import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        // 主頁面
        main: resolve(__dirname, 'index.html'),
        
        // 關於頁面
        about: resolve(__dirname, 'pages/about/index.html'),
        
        // 基因檢測相關頁面
        'genetic-testing': resolve(__dirname, 'pages/genetic-testing/index.html'),
        'genetic-testing-products': resolve(__dirname, 'pages/genetic-testing/products/index.html'),
        'genetic-testing-promotions': resolve(__dirname, 'pages/genetic-testing/promotions/index.html'),
        
        // 其他服務頁面
        'gene-bank': resolve(__dirname, 'pages/gene-bank/index.html'),
        'research-services': resolve(__dirname, 'pages/research-services/index.html'),
        // 'youth-camp': resolve(__dirname, 'pages/youth-camp/index.html'),
        contact: resolve(__dirname, 'pages/contact/index.html'),
        // 'partner-institutions': resolve(__dirname, 'pages/partner-institutions/index.html'),
        terms: resolve(__dirname, 'pages/terms/index.html'),
        
        // 購物車相關頁面
        cart: resolve(__dirname, 'pages/cart/index.html'),
        checkout: resolve(__dirname, 'pages/checkout/index.html'),
        payment: resolve(__dirname, 'pages/payment/index.html'),
        'order-complete': resolve(__dirname, 'pages/order-complete/index.html'),
        
        // 帳戶相關頁面
        login: resolve(__dirname, 'pages/account/login/index.html'),
        register: resolve(__dirname, 'pages/account/register/index.html'),
        profile: resolve(__dirname, 'pages/account/profile/index.html'),
        orders: resolve(__dirname, 'pages/account/orders/index.html'),
        reports: resolve(__dirname, 'pages/account/reports/index.html'),
        consultations: resolve(__dirname, 'pages/account/consultations/index.html'),
      },
    }
  }
})