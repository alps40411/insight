import React from 'react';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import { Plus, Minus } from 'lucide-react';

const CartPage = () => {

  const handleCheckout = () => {
    window.location.href = '/checkout';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="lg:w-2/3">
              <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
              
              <div className="bg-white rounded-lg shadow p-6 mb-6">
                {/* Cart Item */}
                <div className="flex items-center border-b py-4">
                  <img 
                    src="https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Product"
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="flex-grow ml-4">
                    <h3 className="text-lg font-semibold">Alzheimer's Genetic Test</h3>
                    <p className="text-gray-600">NT$ 16,900</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Minus size={20} />
                    </button>
                    <span className="w-8 text-center">1</span>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Plus size={20} />
                    </button>
                  </div>
                </div>

                {/* Cart Item */}
                <div className="flex items-center py-4">
                  <img 
                    src="https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Product"
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="flex-grow ml-4">
                    <h3 className="text-lg font-semibold">Comprehensive Health Screening</h3>
                    <p className="text-gray-600">NT$ 36,900</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Minus size={20} />
                    </button>
                    <span className="w-8 text-center">1</span>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Plus size={20} />
                    </button>
                  </div>
                </div>
              </div>

              {/* VIP Membership */}
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">VIP Membership</h3>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <p className="text-gray-600 mb-4">Choose two complimentary tests</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    "Nucleic Acid Extraction",
                    "Plant & Animal Screening",
                    "Transcriptome Sequencing",
                    "Microbiome Analysis",
                    "Precision Medicine Testing",
                    "Genome Sequencing"
                  ].map((service, index) => (
                    <label key={index} className="relative">
                      <input type="checkbox" className="peer sr-only" />
                      <div className="w-full p-4 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:bg-blue-50">
                        <h4 className="text-sm font-medium text-gray-900">{service}</h4>
                      </div>
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
                    onClick={handleCheckout}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                  >
                    Proceed to Checkout
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

export default CartPage;