import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Warehouse } from 'lucide-react';

const StartPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/dashboard');
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <Warehouse size={64} className="text-blue-600 mb-4" />
      <h1 className="text-4xl font-bold text-gray-800">GUDANG</h1>
    </div>
  );
};

export default StartPage;