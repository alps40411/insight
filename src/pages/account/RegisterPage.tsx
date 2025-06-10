import React, { useState } from 'react';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    phone: '',
    gender: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add registration logic here
    window.location.href = '/account/profile';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-gray-800">Create Account</h1>
                <p className="text-gray-600">Join i-genomics today</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Gender
                    </label>
                    <div className="space-x-4">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="gender"
                          value="male"
                          onChange={handleChange}
                          className="form-radio"
                        />
                        <span className="ml-2">Male</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="gender"
                          value="female"
                          onChange={handleChange}
                          className="form-radio"
                        />
                        <span className="ml-2">Female</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <input type="checkbox" className="form-checkbox" required />
                  <span className="ml-2 text-sm text-gray-600">
                    I agree to the{' '}
                    <a href="/pages/terms/index.html" className="text-blue-600 hover:text-blue-800">
                      Terms of Service
                    </a>
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Create Account
                </button>

                <div className="text-center text-sm text-gray-600">
                  Already have an account?{' '}
                  <a href="/pages/account/login/index.html" className="text-blue-600 hover:text-blue-800">
                    Sign in
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RegisterPage;