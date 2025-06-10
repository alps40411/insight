import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import HeroSlider from './components/home/HeroSlider';
import CompanyValues from './components/home/CompanyValues';
import Advantages from './components/home/Advantages';
import ProductCards from './components/home/ProductCards';
import TestingProcess from './components/home/TestingProcess';
import Partners from './components/home/Partners';
import Testimonials from './components/home/Testimonials';
import './index.css';

const HomePageMPA = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSlider />
        <CompanyValues />
        <Advantages />
        <ProductCards />
        <TestingProcess />
        <Partners />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HomePageMPA />
  </React.StrictMode>
);
