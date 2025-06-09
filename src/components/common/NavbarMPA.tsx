import React, { useState } from 'react';
import { Menu, X, User, ShoppingCart, ChevronDown } from 'lucide-react';
import logo from '/images/logo.png';

const NavbarMPA = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <>
      <div className="navbar shadow-sm bg-white">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <a href="/index.html" className="flex-shrink-0 w-32">
            <img 
              src={logo} 
              alt="i-genomics" 
              className="w-full"
            />
          </a>

          <div className="hidden md:flex space-x-1 flex-grow justify-center">
            <a href="/about.html" className="nav-link px-3 py-2 text-sm font-medium hover:text-green-700">
              About Us
            </a>
            <a href="/gene-bank.html" className="nav-link px-3 py-2 text-sm font-medium hover:text-green-700">
              Gene Bank
            </a>
            <div className="relative group">
              <button className="nav-link px-3 py-2 text-sm font-medium hover:text-green-700 flex items-center">
                Genetic Testing <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute z-50 hidden group-hover:block bg-white shadow-lg rounded-md p-2 w-48">
                <a href="/genetic-testing.html" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded">
                  About Genetic Testing
                </a>
                <a href="/products.html" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded">
                  Testing Products
                </a>
                <a href="/promotions.html" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded">
                  Seasonal Promotions
                </a>
              </div>
            </div>
            <a href="/research-services.html" className="nav-link px-3 py-2 text-sm font-medium hover:text-green-700">
              Research Services
            </a>
            <a href="/contact.html" className="nav-link px-3 py-2 text-sm font-medium hover:text-green-700">
              Contact Us
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <div className="text-sm font-medium">
              <button className="hover:text-green-700">EN</button>/
              <button className="hover:text-green-700">BM</button>
            </div>
            
            {/* User Menu */}
            <div className="relative">
              <button 
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="hover:text-green-700 focus:outline-none"
              >
                <User className="h-6 w-6" />
              </button>
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <a 
                    href="/account-login.html" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign In
                  </a>
                  <a 
                    href="/account-register.html" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Create Account
                  </a>
                  <hr className="my-1" />
                  <a 
                    href="/account-profile.html" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </a>
                  <a 
                    href="/account-orders.html" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Orders
                  </a>
                  <a 
                    href="/account-reports.html" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Test Reports
                  </a>
                  <a 
                    href="/account-consultations.html" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Consultations
                  </a>
                </div>
              )}
            </div>
            
            <a href="/cart.html" className="hover:text-green-700">
              <ShoppingCart className="h-6 w-6" />
            </a>
            <button 
              className="md:hidden focus:outline-none" 
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white p-5">
          <div className="flex justify-end">
            <button 
              className="focus:outline-none" 
              onClick={() => setIsOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="flex flex-col space-y-4 mt-8">
            <a href="/about.html" className="px-3 py-2 text-lg font-medium">
              About Us
            </a>
            <a href="/gene-bank.html" className="px-3 py-2 text-lg font-medium">
              Gene Bank
            </a>
            <div className="px-3 py-2 text-lg font-medium">
              Genetic Testing
              <div className="ml-4 mt-2 flex flex-col space-y-2">
                <a href="/genetic-testing.html" className="text-sm py-1">
                  About Genetic Testing
                </a>
                <a href="/products.html" className="text-sm py-1">
                  Testing Products
                </a>
                <a href="/promotions.html" className="text-sm py-1">
                  Seasonal Promotions
                </a>
              </div>
            </div>
            <a href="/research-services.html" className="px-3 py-2 text-lg font-medium">
              Research Services
            </a>
            <a href="/contact.html" className="px-3 py-2 text-lg font-medium">
              Contact Us
            </a>
            <div className="border-t pt-4">
              <a href="/account-login.html" className="block px-3 py-2 text-lg font-medium">
                Sign In
              </a>
              <a href="/account-register.html" className="block px-3 py-2 text-lg font-medium">
                Create Account
              </a>
              <a href="/account-profile.html" className="block px-3 py-2 text-lg font-medium">
                Profile
              </a>
              <a href="/account-orders.html" className="block px-3 py-2 text-lg font-medium">
                Orders
              </a>
              <a href="/account-reports.html" className="block px-3 py-2 text-lg font-medium">
                Test Reports
              </a>
              <a href="/account-consultations.html" className="block px-3 py-2 text-lg font-medium">
                Consultations
              </a>
            </div>
          </div>
        </div>
      )}
      
      {/* Colored bar below navbar */}
      <div className="h-2 bg-gradient-to-r from-blue-600 via-green-500 to-yellow-400 w-full"></div>
    </>
  );
};

export default NavbarMPA; 