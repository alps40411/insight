import React from 'react';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import { ShoppingCart, FileText } from 'lucide-react';

const ProductDetailPage = () => {
  // 從URL查詢參數獲取產品ID
  const getProductIdFromURL = () => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get('id');
    }
    return null;
  };

  const productId = getProductIdFromURL();

  // This would normally come from an API or database
  const product = {
    id: 1,
    name: "Alzheimer's Genetic Test",
    nameEn: "Alzheimer's Disease Genetic Test",
    description: "Early detection of genetic risk factors for Alzheimer's disease",
    image: "https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg",
    testingTime: "7 working days",
    method: "Oral swab",
    price: 16900,
    details: `Comprehensive genetic analysis for Alzheimer's disease risk factors...`
  };

  const relatedProducts = [
    {
      id: 2,
      name: "Cardiovascular Health Test",
      image: "https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg",
      price: 19900
    },
    // Add more related products...
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Product Overview */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
                  <p className="text-gray-600 mb-4">{product.nameEn}</p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between">
                      <span className="font-medium">Testing Time:</span>
                      <span>{product.testingTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Method:</span>
                      <span>{product.method}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Price:</span>
                      <span className="text-2xl font-bold text-blue-600">
                        NT$ {product.price.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href="/pages/cart/index.html"
                      className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
                    >
                      <ShoppingCart size={20} />
                      Add to Cart
                    </a>
                    <button className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition flex items-center justify-center gap-2">
                      <FileText size={20} />
                      Sample Report
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Product Details</h2>
              <div className="prose max-w-none">
                <p>{product.details}</p>
              </div>
            </div>

            {/* Related Products */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Related Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProducts.map(relatedProduct => (
                  <a 
                    key={relatedProduct.id}
                    href={`/product-detail.html?id=${relatedProduct.id}`}
                    className="bg-white rounded-lg shadow overflow-hidden cursor-pointer block"
                  >
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">{relatedProduct.name}</h3>
                      <p className="text-blue-600 font-bold">
                        NT$ {relatedProduct.price.toLocaleString()}
                      </p>
                    </div>
                  </a>
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

export default ProductDetailPage;