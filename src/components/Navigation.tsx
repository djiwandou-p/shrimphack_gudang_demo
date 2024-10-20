import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Package, BarChart2, Settings } from 'lucide-react';

const Navigation: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t">
      <div className="flex justify-around items-center h-16">
        <Link to="/dashboard" className={`flex flex-col items-center ${isActive('/dashboard') ? 'text-blue-500' : 'text-gray-500'}`}>
          <Home size={24} />
          <span className="text-xs">Home</span>
        </Link>
        <Link to="/inventory" className={`flex flex-col items-center ${isActive('/inventory') ? 'text-blue-500' : 'text-gray-500'}`}>
          <Package size={24} />
          <span className="text-xs">Inventory</span>
        </Link>
        <Link to="/transaction" className={`flex flex-col items-center ${isActive('/transaction') ? 'text-blue-500' : 'text-gray-500'}`}>
          <BarChart2 size={24} />
          <span className="text-xs">Transaction</span>
        </Link>
        <Link to="/adjustment" className={`flex flex-col items-center ${isActive('/adjustment') ? 'text-blue-500' : 'text-gray-500'}`}>
          <Settings size={24} />
          <span className="text-xs">Adjustment</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;