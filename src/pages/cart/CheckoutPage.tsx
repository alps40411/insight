import React from 'react';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';

const CheckoutPage = () => {
  const handlePayment = () => {
    window.location.href = '/payment';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Checkout Form */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow p-6 mb-6">
                <h2 className="text-2xl font-bold mb-6">Billing Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Full Name</label>
                    <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Phone</label>
                    <input type="tel" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 mb-2">Address</label>
                    <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6 mb-6">
                <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Recipient Name</label>
                    <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Phone</label>
                    <input type="tel" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 mb-2">Shipping Address</label>
                    <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 mb-2">Notes</label>
                    <textarea className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" rows={4}></textarea>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl font-bold mb-6">Payment Method</h2>
                <div className="space-y-4">
                  {[
                    "Credit Card",
                    "Credit Card Installment",
                    "UnionPay",
                    "WebATM",
                    "ATM Transfer",
                    "Convenience Store Code",
                    "Convenience Store Barcode",
                    "LINE Pay"
                  ].map((method, index) => (
                    <label key={index} className="flex items-center space-x-3">
                      <input type="radio" name="payment" className="form-radio h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">{method}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow p-6 sticky top-4">
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Alzheimer's Test</span>
                    <span>NT$ 16,900</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Comprehensive Screening</span>
                    <span>NT$ 36,900</span>
                  </div>
                  <div className="flex justify-between">
                    <span>VIP Membership</span>
                    <span>NT$ 56,000</span>
                  </div>
                  <hr />
                  <div className="flex justify-between font-bold text-xl">
                    <span>Total</span>
                    <span>NT$ 109,800</span>
                  </div>
                  <button 
                    onClick={handlePayment}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                  >
                    Proceed to Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutPage;