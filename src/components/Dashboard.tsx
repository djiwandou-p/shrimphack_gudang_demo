import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Package, AlertTriangle, TrendingUp, TrendingDown, AlertOctagon, ShoppingCart } from 'lucide-react';
import { format, addDays } from 'date-fns';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const summaryData = {
    products: 20,
    willExpire: 5,
    productsIn: 3,
    productsOut: 6
  };

  const topProductsOut = [
    { name: 'A', quantity: 1000 },
    { name: 'B', quantity: 1000 },
    { name: 'C', quantity: 1000 },
    { name: 'D', quantity: 1000 },
    { name: 'E', quantity: 1000 }
  ];

  const willBeExpired = [
    { name: 'A', expDate: '1/1/2024', quantity: 10 },
    { name: 'B', expDate: '1/1/2024', quantity: 6 },
    { name: 'C', expDate: '1/1/2024', quantity: 8 },
    { name: 'D', expDate: '1/1/2024', quantity: 9 },
    { name: 'E', expDate: '1/1/2024', quantity: 12 }
  ];

  const mustBeOut = [
    { name: 'A', quantity: 1000, reason: 'Overstock' },
    { name: 'B', quantity: 1000, reason: 'Will Expired' },
    { name: 'C', quantity: 1000, reason: 'Will Expired' },
    { name: 'D', quantity: 1000, reason: 'Overstock' },
    { name: 'E', quantity: 1000, reason: 'Will Expired' }
  ];

  const mustBeIn = [
    { name: 'A', quantity: 1000 },
    { name: 'B', quantity: 1000 },
    { name: 'C', quantity: 1000 },
    { name: 'D', quantity: 1000 },
    { name: 'E', quantity: 1000 }
  ];

  const history = [
    { name: 'A', quantity: 1000, quality: 'Fresh', expiredDate: '1/1/2024', status: 'Inbound' },
    { name: 'B', quantity: 1000, quality: 'Fresh', expiredDate: '1/1/2024', status: 'Inbound' },
    { name: 'C', quantity: 1000, quality: 'Fresh', expiredDate: '1/1/2024', status: 'Outbound' },
    { name: 'D', quantity: 1000, quality: 'Fresh', expiredDate: '1/1/2024', status: 'Inbound' },
    { name: 'E', quantity: 1000, quality: 'Fresh', expiredDate: '1/1/2024', status: 'Outbound' }
  ];

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-blue-100 p-4 rounded-lg">
          <Package className="mb-2" />
          <h2 className="text-xl font-semibold">Products</h2>
          <p className="text-3xl font-bold">{summaryData.products}</p>
        </div>
        <div className="bg-red-100 p-4 rounded-lg">
          <AlertTriangle className="mb-2" />
          <h2 className="text-xl font-semibold">Will Expire</h2>
          <p className="text-3xl font-bold">{summaryData.willExpire}</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <TrendingUp className="mb-2" />
          <h2 className="text-xl font-semibold">Products In</h2>
          <p className="text-3xl font-bold">{summaryData.productsIn}</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg">
          <TrendingDown className="mb-2" />
          <h2 className="text-xl font-semibold">Products Out</h2>
          <p className="text-3xl font-bold">{summaryData.productsOut}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Top Products Out</h2>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left">Product</th>
                <th className="text-right">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {topProductsOut.map((product, index) => (
                <tr key={index}>
                  <td>{product.name}</td>
                  <td className="text-right">{product.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Will be Expired</h2>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left">Product</th>
                <th className="text-center">Exp. Date</th>
                <th className="text-right">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {willBeExpired.map((product, index) => (
                <tr key={index}>
                  <td>{product.name}</td>
                  <td className="text-center">{product.expDate}</td>
                  <td className="text-right">{product.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Must be Out</h2>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left">Product</th>
                <th className="text-center">Quantity</th>
                <th className="text-right">Reason</th>
              </tr>
            </thead>
            <tbody>
              {mustBeOut.map((product, index) => (
                <tr key={index}>
                  <td>{product.name}</td>
                  <td className="text-center">{product.quantity}</td>
                  <td className="text-right">{product.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Must be In</h2>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left">Product</th>
                <th className="text-right">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {mustBeIn.map((product, index) => (
                <tr key={index}>
                  <td>{product.name}</td>
                  <td className="text-right">{product.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">History</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Product</th>
              <th className="text-center">Quantity</th>
              <th className="text-center">Quality</th>
              <th className="text-center">Expired Date</th>
              <th className="text-right">Status</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td className="text-center">{item.quantity}</td>
                <td className="text-center">{item.quality}</td>
                <td className="text-center">{item.expiredDate}</td>
                <td className="text-right">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;