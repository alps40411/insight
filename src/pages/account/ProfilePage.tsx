import React, { useState } from 'react';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import AccountNav from '../../components/account/AccountNav';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+60 12-345-6789',
    gender: 'male',
    address: '123 Main St, Kuala Lumpur',
    lineId: 'johndoe123'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    // Add update profile logic here
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <AccountNav />
            
            <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Profile Information</h2>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  {isEditing ? 'Cancel' : 'Edit'}
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Full Name
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    ) : (
                      <p className="text-gray-800">{formData.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Email
                    </label>
                    <p className="text-gray-800">{formData.email}</p>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Phone
                    </label>
                    {isEditing ? (
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    ) : (
                      <p className="text-gray-800">{formData.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      LINE ID
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={formData.lineId}
                        onChange={(e) => setFormData({...formData, lineId: e.target.value})}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    ) : (
                      <p className="text-gray-800">{formData.lineId}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Gender
                    </label>
                    {isEditing ? (
                      <div className="space-x-4">
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={formData.gender === 'male'}
                            onChange={(e) => setFormData({...formData, gender: e.target.value})}
                            className="form-radio"
                          />
                          <span className="ml-2">Male</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={formData.gender === 'female'}
                            onChange={(e) => setFormData({...formData, gender: e.target.value})}
                            className="form-radio"
                          />
                          <span className="ml-2">Female</span>
                        </label>
                      </div>
                    ) : (
                      <p className="text-gray-800 capitalize">{formData.gender}</p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-gray-700 font-medium mb-2">
                      Address
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={formData.address}
                        onChange={(e) => setFormData({...formData, address: e.target.value})}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    ) : (
                      <p className="text-gray-800">{formData.address}</p>
                    )}
                  </div>
                </div>

                {isEditing && (
                  <div className="mt-6 flex justify-end">
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                      Save Changes
                    </button>
                  </div>
                )}
              </form>
            </div>

            <div className="bg-blue-900 text-white rounded-lg shadow-lg p-6 mt-6">
              <h3 className="text-xl font-bold mb-4">Membership Status</h3>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg">Regular Member</p>
                  <p className="text-sm text-blue-200">Since March 2024</p>
                </div>
                <a
                  href="#"
                  className="bg-yellow-500 text-blue-900 px-4 py-2 rounded-lg font-medium hover:bg-yellow-400 transition"
                >
                  Upgrade to VIP
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProfilePage;