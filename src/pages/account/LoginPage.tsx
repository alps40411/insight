import React, { useState } from 'react';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Add login logic here
    window.location.href = '/account/profile';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
                <p className="text-gray-600">Sign in to your account</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2 text-sm text-gray-600">Remember me</span>
                  </label>
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Sign In
                </button>

                <div className="text-center text-sm text-gray-600">
                  Don't have an account?{' '}
                  <a href="/pages/account/register/index.html" className="text-blue-600 hover:text-blue-800">
                    Sign up
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

export default LoginPage;