import React, { useState } from 'react';
import { getStatusClass } from '../utils/statusUtils';
import useFilteredSortedOrders from '../hooks/useFilteredSortedOrders';
import useOrders from '../hooks/useOrders';

const OrderList = ({ onSelectOrder, darkMode }) => {
    const { orders, isLoading } = useOrders();
    const [searchTerm, setSearchTerm] = useState('');
    const [sortField, setSortField] = useState('id');
    const [sortDirection, setSortDirection] = useState('asc');
    const [selectedOrderId, setSelectedOrderId] = useState(null);

    const sortedOrders = useFilteredSortedOrders(orders, searchTerm, sortField, sortDirection);

    const handleSort = (field) => {
        if (sortField === field) {
            setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
        } else {
            setSortField(field);
            setSortDirection('asc');
        }
    };

    const handleRowClick = (order) => {
        setSelectedOrderId(order.id);
        onSelectOrder(order);
    };

    return (
        <div className={`p-6 shadow-lg rounded-lg overflow-auto ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white'}`}>
            <h1 className="text-2xl font-bold mb-4">Order List</h1>
            <input
                type="text"
                placeholder="Search orders..."
                className={`mb-4 p-2 border rounded ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-200' : 'border-gray-300 bg-white text-gray-800'}`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {isLoading ? (
                <div className="flex justify-center items-center h-32">
                    <div className="spinner"></div> {/* Ensure you have a spinner style */}
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table className={`min-w-full border rounded-lg overflow-hidden ${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-white text-gray-800'}`}>
                        <thead>
                            <tr className={`border-b ${darkMode ? 'bg-gray-600' : 'bg-blue-200'}`}>
                                <th className="py-2 px-4 text-left cursor-pointer" onClick={() => handleSort('id')}>ID</th>
                                <th className="py-2 px-4 text-left cursor-pointer" onClick={() => handleSort('customerName')}>Customer</th>
                                <th className="py-2 px-4 text-left cursor-pointer" onClick={() => handleSort('orderDate')}>Order Date</th>
                                <th className="py-2 px-4 text-left">Status</th>
                            </tr>
                        </thead>
                        <tbody className={`divide-y ${darkMode ? 'divide-gray-600' : 'divide-gray-200'}`}>
                            {sortedOrders.length ? (
                                sortedOrders.map(order => (
                                    <tr
                                        key={order.id}
                                        onClick={() => handleRowClick(order)}
                                        className={`cursor-pointer ${selectedOrderId === order.id ? (darkMode ? 'bg-gray-600 text-gray-200' : 'bg-blue-100') : (darkMode ? 'hover:bg-gray-500' : 'hover:bg-blue-100')} ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}
                                    >
                                        <td className="py-2 px-4">{order.id}</td>
                                        <td className="py-2 px-4">{order.customerName}</td>
                                        <td className="py-2 px-4">{order.orderDate}</td>
                                        <td className="py-2 px-4">
                                            <span className={`px-2 py-1 rounded ${getStatusClass(order.status)}`}>
                                                {order.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="py-4 text-center">No orders available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default OrderList;
