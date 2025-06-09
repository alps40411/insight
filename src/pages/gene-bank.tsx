import React from 'react';
import ReactDOM from 'react-dom/client';
import NavbarMPA from '../components/common/NavbarMPA';
import FooterMPA from '../components/common/FooterMPA';
import '../index.css';

const GeneBankPageMPA = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarMPA />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-8">基因庫</h1>
            <p className="text-lg text-gray-600 mb-8">
              我們的基因庫收集和保存珍貴的遺傳資訊，為未來的研究和醫療發展提供重要資源。
            </p>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">即將推出</h2>
              <p className="text-gray-700">
                基因庫功能正在開發中，敬請期待更多詳細資訊。
              </p>
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
    <GeneBankPageMPA />
  </React.StrictMode>
); 