import React from 'react';
import { User, ShoppingBag, FileText, MessageSquare } from 'lucide-react';

const AccountNav = () => {
  // 獲取當前頁面路徑來判斷active狀態
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';

  const links = [
    {
      to: '/account-profile.html',
      icon: User,
      label: 'Profile'
    },
    {
      to: '/account-orders.html',
      icon: ShoppingBag,
      label: 'Orders'
    },
    {
      to: '/account-reports.html',
      icon: FileText,
      label: 'Reports'
    },
    {
      to: '/account-consultations.html',
      icon: MessageSquare,
      label: 'Consultations'
    }
  ];

  return (
    <nav className="bg-white rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = currentPath === link.to;
          
          return (
            <a
              key={link.to}
              href={link.to}
              className={`flex items-center px-6 py-3 ${
                isActive 
                  ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              <Icon className="h-5 w-5 mr-2" />
              {link.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default AccountNav;