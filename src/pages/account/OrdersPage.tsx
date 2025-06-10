import React from 'react';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import AccountNav from '../../components/account/AccountNav';

const orders = [
  {
    id: '202403150001',
    date: '2024-03-15',
    status: 'Processing',
    total: 16900,
    items: [
      {
        name: "Alzheimer's Genetic Test",
        quantity: 1,
        price: 16900
      }
    ]
  },
  {
    id: '202403100002',
    date: '2024-03-10',
    status: 'Completed',
    total: 36900,
    items: [
      {
        name: 'Comprehensive Health Screening',
        quantity: 1,
        price: 36900
      }
    ]
  }
];

const OrdersPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <AccountNav />
            
            <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Order History</h2>
              
              <div className="space-y-6">
                {orders.map((order) => (
                  <div key={order.id} className="border rounded-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-sm text-gray-600">Order #{order.id}</p>
                        <p className="text-sm text-gray-600">{order.date}</p>
                      </div>
                      <div className="text-right">
                        <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                          order.status === 'Completed' 
                            ? 'bg-green-100 text-green-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                          </div>
                          <p className="font-medium">NT$ {item.price.toLocaleString()}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 pt-4 border-t flex justify-between items-center">
                      <p className="font-bold">Total</p>
                      <p className="font-bold">NT$ {order.total.toLocaleString()}</p>
                    </div>

                    <div className="mt-4 flex justify-end space-x-4">
                      <a
                        href={`/account-order-details.html?id=${order.id}`}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        View Details
                      </a>
                      {order.status === 'Completed' && (
                        <a
                          href={`/account-report-details.html?id=${order.id}`}
                          className="text-green-600 hover:text-green-800"
                        >
                          View Report
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrdersPage;