import React, { useState } from 'react';
import NavbarMPA from '../components/common/NavbarMPA';
import FooterMPA from '../components/common/FooterMPA';
import { Search } from 'lucide-react';

const categories = [
  {
    id: 'health',
    name: 'Health Protection',
    icon: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg',
    description: 'Comprehensive protection, cancer screening, cardiovascular health'
  },
  {
    id: 'nutrition',
    name: 'Nutrition & Metabolism',
    icon: 'https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg',
    description: 'Metabolism analysis, nutritional needs, dietary recommendations'
  },
  {
    id: 'wellness',
    name: 'Mental Wellness',
    icon: 'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg',
    description: 'Mental health factors, stress response, personality traits'
  },
  {
    id: 'youth',
    name: 'Youth Health',
    icon: 'https://images.pexels.com/photos/8851617/pexels-photo-8851617.jpeg',
    description: 'Development, learning traits, health predispositions'
  }
];

const products = [
  {
    id: 1,
    name: "Alzheimer's Genetic Test",
    category: "health",
    price: 16900,
    image: "https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg"
  },
  {
    id: 2,
    name: "Comprehensive Health Screening",
    category: "health",
    price: 36900,
    image: "https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg"
  },
  {
    id: 3,
    name: "Metabolism Analysis",
    category: "nutrition",
    price: 24900,
    image: "https://images.pexels.com/photos/4226466/pexels-photo-4226466.jpeg"
  },
  {
    id: 4,
    name: "Mental Health Profile",
    category: "wellness",
    price: 28900,
    image: "https://images.pexels.com/photos/8851633/pexels-photo-8851633.jpeg"
  },
  {
    id: 5,
    name: "Youth Development Test",
    category: "youth",
    price: 22900,
    image: "https://images.pexels.com/photos/8851617/pexels-photo-8851617.jpeg"
  }
];

const ProductsPageMPA = () => {
  const [selectedCategory, setSelectedCategory] = useState('health');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product => 
    product.category === selectedCategory &&
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <NavbarMPA />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Categories */}
            <div className="md:w-1/4">
              <div className="bg-white rounded-lg shadow p-6 sticky top-4">
                <h2 className="text-xl font-bold mb-4">Categories</h2>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left p-3 rounded-lg transition duration-200 ${
                        selectedCategory === category.id
                          ? 'bg-blue-50 text-blue-600'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center">
                        <img 
                          src={category.icon} 
                          alt={category.name}
                          className="w-8 h-8 rounded-full object-cover mr-3"
                        />
                        <div>
                          <div className="font-medium">{category.name}</div>
                          <div className="text-sm text-gray-500">{category.description}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Products */}
            <div className="md:w-3/4">
              <div className="mb-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search tests..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                  <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                      <p className="text-gray-600 mb-4">NT$ {product.price.toLocaleString()}</p>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => window.location.href = '/cart.html'}
                          className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                        >
                          Add to Cart
                        </button>
                        <button 
                          onClick={() => alert('Product details coming soon!')}
                          className="flex-1 bg-gray-100 text-gray-700 py-2 rounded hover:bg-gray-200 transition"
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <FooterMPA />
    </div>
  );
};

export default ProductsPageMPA; 