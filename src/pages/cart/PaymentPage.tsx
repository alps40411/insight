import React from 'react';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import { CreditCard, Calendar, Lock } from 'lucide-react';

const PaymentPage = () => {
  const handlePayment = () => {
    window.location.href = '/order-complete';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow p-8">
              <h2 className="text-2xl font-bold mb-8 text-center">Credit Card Payment</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Cardholder Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Name as shown on card"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Card Number</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 pl-10"
                      placeholder="1234 5678 9012 3456"
                    />
                    <CreditCard className="absolute left-3 top-2.5 text-gray-400" size={20} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Expiry Date</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 pl-10"
                        placeholder="MM/YY"
                      />
                      <Calendar className="absolute left-3 top-2.5 text-gray-400" size={20} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">CVC</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 pl-10"
                        placeholder="CVC"
                      />
                      <Lock className="absolute left-3 top-2.5 text-gray-400" size={20} />
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <button 
                    onClick={handlePayment}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                  >
                    Pay NT$ 109,800
                  </button>
                </div>

                <p className="text-sm text-gray-500 text-center mt-4">
                  All transactions are secured and encrypted
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentPage;