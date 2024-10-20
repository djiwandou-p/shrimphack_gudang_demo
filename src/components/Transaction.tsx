import React, { useState, useEffect } from 'react';
import { QrCode, ArrowDownCircle, ArrowUpCircle } from 'lucide-react';

const Transaction: React.FC = () => {
  const [showScanner, setShowScanner] = useState(true);
  const [productCode, setProductCode] = useState('');
  const [quantity, setQuantity] = useState('');

  useEffect(() => {
    // Simulating camera access request
    const timer = setTimeout(() => {
      setShowScanner(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleScan = () => {
    // Implement QR code scanning logic
  };

  const handleManualInput = () => {
    setShowScanner(false);
  };

  const handleTransaction = (type: 'inbound' | 'outbound') => {
    // Implement transaction logic
    console.log(`${type} transaction for product ${productCode}, quantity: ${quantity}`);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Transaction</h1>

      {showScanner ? (
        <div className="bg-gray-200 p-4 rounded-lg mb-4 flex items-center justify-center">
          <QrCode size={150} />
        </div>
      ) : (
        <button onClick={() => setShowScanner(true)} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
          Scan QR Code
        </button>
      )}

      <p className="text-center mb-4">or input detail product manually</p>

      <input
        type="text"
        value={productCode}
        onChange={(e) => setProductCode(e.target.value)}
        placeholder="Enter product code"
        className="w-full p-2 border rounded mb-4"
      />

      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        placeholder="Enter quantity"
        className="w-full p-2 border rounded mb-4"
      />

      <div className="flex justify-between">
        <button
          onClick={() => handleTransaction('inbound')}
          className="bg-green-500 text-white px-4 py-2 rounded flex items-center"
        >
          <ArrowDownCircle size={18} className="mr-2" />
          Inbound
        </button>
        <button
          onClick={() => handleTransaction('outbound')}
          className="bg-red-500 text-white px-4 py-2 rounded flex items-center"
        >
          <ArrowUpCircle size={18} className="mr-2" />
          Outbound
        </button>
      </div>
    </div>
  );
};

export default Transaction;