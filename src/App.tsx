import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GeneticTestingPage from './pages/genetic-testing/GeneticTestingPage';
import ProductsPage from './pages/genetic-testing/ProductsPage';
import ProductDetailPage from './pages/genetic-testing/ProductDetailPage';
import PromotionsPage from './pages/genetic-testing/PromotionsPage';
import GeneBank from './pages/GeneBank';
import ResearchServices from './pages/ResearchServices';
// import YouthCamp from './pages/YouthCamp';
import ContactPage from './pages/ContactPage';
// import PartnerInstitutions from './pages/PartnerInstitutions';
import TermsOfService from './pages/TermsOfService';
import CartPage from './pages/cart/CartPage';
import CheckoutPage from './pages/cart/CheckoutPage';
import PaymentPage from './pages/cart/PaymentPage';
import OrderCompletePage from './pages/cart/OrderCompletePage';
import LoginPage from './pages/account/LoginPage';
import RegisterPage from './pages/account/RegisterPage';
import ProfilePage from './pages/account/ProfilePage';
import OrdersPage from './pages/account/OrdersPage';
import ReportsPage from './pages/account/ReportsPage';
import ConsultationsPage from './pages/account/ConsultationsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/genetic-testing" element={<GeneticTestingPage />} />
        <Route path="/genetic-testing/products" element={<ProductsPage />} />
        <Route path="/genetic-testing/products/:id" element={<ProductDetailPage />} />
        <Route path="/genetic-testing/promotions" element={<PromotionsPage />} />
        <Route path="/gene-bank" element={<GeneBank />} />
        <Route path="/research-services" element={<ResearchServices />} />
        {/* <Route path="/youth-camp" element={<YouthCamp />} /> */}
        <Route path="/contact" element={<ContactPage />} />
        {/* <Route path="/partner-institutions" element={<PartnerInstitutions />} /> */}
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/order-complete" element={<OrderCompletePage />} />
        <Route path="/account/login" element={<LoginPage />} />
        <Route path="/account/register" element={<RegisterPage />} />
        <Route path="/account/profile" element={<ProfilePage />} />
        <Route path="/account/orders" element={<OrdersPage />} />
        <Route path="/account/reports" element={<ReportsPage />} />
        <Route path="/account/consultations" element={<ConsultationsPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;