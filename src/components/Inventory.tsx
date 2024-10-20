import React, { useState } from 'react';
import { PieChart, Pencil, Plus } from 'lucide-react';

const Inventory: React.FC = () => {
  const [products, setProducts] = useState([
    { name: 'A', quantity: 1000, inDate: '31/12/2023', expiredDate: '1/1/2024' },
    { name: 'B', quantity: 1000, inDate: '31/12/2023', expiredDate: '1/1/2024' },
    { name: 'C', quantity: 1000, inDate: '31/12/2023', expiredDate: '1/1/2024' },
    { name: 'D', quantity: 1000, inDate: '31/12/2023', expiredDate: '1/1/2024' },
    { name: 'E', quantity: 1000, inDate: '31/12/2023', expiredDate: '1/1/2024' },
    { name: 'F', quantity: 1000, inDate: '31/12/2023', expiredDate: '1/1/2024' },
    { name: 'G', quantity: 1000, inDate: '31/12/2023', expiredDate: '1/1/2024' },
    { name: 'H', quantity: 1000, inDate: '31/12/2023', expiredDate: '1/1/2024' },
    { name: 'I', quantity: 1000, inDate: '31/12/2023', expiredDate: '1/1/2024' },
    { name: 'J', quantity: 1000, inDate: '31/12/2023', expiredDate: '1/1/2024' },
  ]);

  const [filters, setFilters] = useState({
    product: '',
    quality: '',
    inDate: '',
    expiredDate: '',
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleAddProduct = () => {
    // Implement add product functionality
  };

  const handleEditProduct = (index: number) => {
    // Implement edit product functionality
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Inventory</h1>

      <div className="mb-6">
        <PieChart className="w-full h-48" />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
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
        <select
          name="quality"
          value={filters.quality}
          onChange={handleFilterChange}
          className="p-2 border rounded"
        >
          <option value="">Select Quality</option>
          <option value="fresh">Fresh</option>
          <option value="expired">Expired</option>
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
            <th className="text-center">In Date</th>
            <th className="text-center">Expired Date</th>
            <th className="text-right">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td className="text-center">{product.quantity}</td>
              <td className="text-center">{product.inDate}</td>
              <td className="text-center">{product.expiredDate}</td>
              <td className="text-right">
                <button onClick={() => handleEditProduct(index)} className="text-blue-500">
                  <Pencil size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={handleAddProduct}
        className="bg-blue-500 text-white px-4 py-2 rounded flex items-center"
      >
        <Plus size={18} className="mr-2" />
        Add Product
      </button>
    </div>
  );
};

export default Inventory;