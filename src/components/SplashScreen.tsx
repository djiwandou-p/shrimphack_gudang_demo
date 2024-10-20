import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SplashScreen: React.FC = () => {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 9000);

    const navigationTimer = setTimeout(() => {
      navigate('/dashboard');
    }, 10000);

    return () => {
      clearTimeout(timer);
      clearTimeout(navigationTimer);
    };
  }, [navigate]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center transition-opacity duration-1000 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative w-full h-full">
        <img
          src="/public/start_page_background.png"
          alt="Warehouse Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <img
            src="/public/icon_gudang.png"
            alt="Gudang Logo"
            className="w-32 h-32 mb-4"
          />
          <h1 className="text-4xl font-bold text-white">GUDANG</h1>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
