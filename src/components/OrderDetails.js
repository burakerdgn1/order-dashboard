import React from 'react';

const getStatusClass = (status) => {
    switch (status) {
        case 'On The Way':
            return 'bg-blue-500 text-blue-100';
        case 'Delivered':
            return 'bg-green-500 text-green-100';
        case 'Not Delivered':
            return 'bg-red-500 text-red-100';
        case 'Cancelled':
            return 'bg-gray-500 text-gray-100';
        default:
            return 'bg-gray-500 text-gray-100';
    }
};

const OrderDetails = ({ order, darkMode }) => {
    if (!order) return (
        <div className={`p-4 ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'} shadow-md rounded-lg text-center`}>
            Select an order to see the details
        </div>
    );

    return (
        <div className={`p-6 shadow-lg rounded-lg max-w-md mx-auto ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'}`}>
            <h1 className="text-2xl font-bold mb-4 text-center">Order Details</h1>
            <div className="space-y-2">
                <p><strong>ID:</strong> {order.id}</p>
                <p><strong>Customer Name:</strong> {order.customerName}</p>
                <p><strong>Order Date:</strong> {order.orderDate}</p>
                <p><strong>Status:</strong> <span className={`px-2 py-1 rounded ${getStatusClass(order.status)}`}>{order.status}</span></p>
            </div>
        </div>
    );
};

export default OrderDetails;
