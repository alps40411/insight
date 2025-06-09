import React from 'react';
import ReactDOM from 'react-dom/client';
import NavbarMPA from '../components/common/NavbarMPA';
import FooterMPA from '../components/common/FooterMPA';
import '../index.css';

const ResearchServicesPageMPA = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarMPA />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-8">研究服務</h1>
            <p className="text-lg text-gray-600">
              我們提供專業的基因研究服務，協助推進醫學研究和創新發展。
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">基因組分析</h3>
              <p className="text-gray-600 mb-4">
                提供全面的基因組測序和分析服務，協助研究人員深入了解基因變異。
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                了解更多
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">生物資訊學</h3>
              <p className="text-gray-600 mb-4">
                運用先進的生物資訊學工具和方法，提供數據分析和解讀服務。
              </p>
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                了解更多
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">客製化研究</h3>
              <p className="text-gray-600 mb-4">
                根據研究需求，提供量身定制的基因研究解決方案。
              </p>
              <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">
                了解更多
              </button>
            </div>
          </div>
        </div>
      </main>
      <FooterMPA />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ResearchServicesPageMPA />
  </React.StrictMode>
); 