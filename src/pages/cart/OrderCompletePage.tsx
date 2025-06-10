import React from 'react';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import { CheckCircle, Link } from 'lucide-react';

const OrderCompletePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto" />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Order Complete!
            </h1>
            
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <p className="text-lg text-gray-600 mb-6">
                Thank you for your order! Your order has been successfully placed.
              </p>
              
              <div className="border-t border-b border-gray-200 py-4 mb-6">
                <p className="text-gray-700">Order Number</p>
                <p className="text-2xl font-bold text-gray-900">202403150001</p>
              </div>
              
              <p className="text-gray-600">
                We have sent a confirmation email to your inbox.
                <br />
                Please contact us if you have any questions.
              </p>
            </div>
            
            <div className="flex justify-center gap-4">
              <a 
                href="/index.html"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Return Home
              </a>
              <a 
                href="/pages/account/orders/index.html"
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition"
              >
                View Orders
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderCompletePage;