import React, { useState } from 'react';
import OrderList from './OrderList';
import OrderDetails from './OrderDetails';

const Dashboard = () => {
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={`flex flex-col items-center p-8 min-h-screen ${darkMode ? 'bg-gray-900 text-gray-200' : 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'}`}>
            <button
                onClick={() => setDarkMode(prev => !prev)}
                className={`mb-4 p-2 ${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-300 text-gray-800'} rounded`}
            >
                {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            <div className="w-full max-w-7xl flex flex-col lg:flex-row lg:items-start gap-8">
                <div className="w-full lg:w-2/3">
                    <OrderList onSelectOrder={setSelectedOrder} darkMode={darkMode} />
                </div>
                <div className="w-full lg:w-1/3 flex justify-center">
                    <OrderDetails order={selectedOrder} darkMode={darkMode} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
