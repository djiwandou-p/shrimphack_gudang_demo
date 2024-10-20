import React, { useState } from 'react';
import { ArrowUpCircle, ArrowDownCircle, ExternalLink } from 'lucide-react';

const Adjustment: React.FC = () => {
  const [filters, setFilters] = useState({
    product: '',
    inDate: '',
    expiredDate: '',
  });

  const products = [
    { name: 'A', quantity: 1000, quality: 'Fresh', expiredDate: '1/1/2024' },
    { name: 'B', quantity: 1000, quality: 'Fresh', expiredDate: '1/1/2024' },
    { name: 'C', quantity: 1000, quality: 'Fresh', expiredDate: '1/1/2024' },
    { name: 'D', quantity: 1000, quality: 'Fresh', expiredDate: '1/1/2024' },
    { name: 'E', quantity: 1000, quality: 'Fresh', expiredDate: '1/1/2024' },
  ];

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleExport = () => {
    // Implement export functionality
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Adjustment</h1>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <select
          name="product"
          value={filters.product}
          onChange={handleFilterChange}
          className="p-2 border rounded"
        >
          <option value="">Select Product</option>
          {products.map((product, index) => (
            <option key={index} value={product.name}>{product.name}</option>
          ))}
        </select>
        <input
          type="date"
          name="inDate"
          value={filters.inDate}
          onChange={handleFilterChange}
          className="p-2 border rounded"
          placeholder="In Date"
        />
        <input
          type="date"
          name="expiredDate"
          value={filters.expiredDate}
          onChange={handleFilterChange}
          className="p-2 border rounded"
          placeholder="Expired Date"
        />
      </div>

      <table className="w-full mb-6">
        <thead>
          <tr>
            <th className="text-left">Product</th>
            <th className="text-center">Quantity</th>
            <th className="text-center">Quality</th>
            <th className="text-right">Expired Date</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td className="text-center">{product.quantity}</td>
              <td className="text-center">{product.quality}</td>
              <td className="text-right">{product.expiredDate}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Recommendation</h2>
        <div className="bg-red-100 p-4 rounded-lg mb-4">
          <p className="font-semibold mb-2">Terdapat 3 produk yang perlu segera dilakukan outbound karena sudah mendekati expired date pada 1/1/2024.</p>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left">Product</th>
                <th className="text-center">Quantity</th>
                <th className="text-center">Quality</th>
                <th className="text-right">Expired Date</th>
              </tr>
            </thead>
            <tbody>
              {products.slice(0, 3).map((product, index) => (
                <tr key={index}>
                  <td>{product.name}</td>
                  <td className="text-center">{product.quantity}</td>
                  <td className="text-center">{product.quality}</td>
                  <td className="text-right">{product.expiredDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <p className="font-semibold mb-2">Terdapat 2 produk yang perlu dilakukan inbound karena stok barang menipis.</p>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left">Product</th>
                <th className="text-center">Quantity</th>
                <th className="text-center">Quality</th>
                <th className="text-right">Expired Date</th>
              </tr>
            </thead>
            <tbody>
              {products.slice(3, 5).map((product, index) => (
                <tr key={index}>
                  <td>{product.name}</td>
                  <td className="text-center">{product.quantity}</td>
                  <td className="text-center">{product.quality}</td>
                  <td className="text-right">{product.expiredDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <button
        onClick={handleExport}
        className="bg-blue-500 text-white px-4 py-2 rounded flex items-center"
      >
        <ExternalLink size={18} className="mr-2" />
        Export
      </button>
    </div>
  );
};

export default Adjustment;