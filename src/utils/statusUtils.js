export const getStatusClass = (status) => {
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
