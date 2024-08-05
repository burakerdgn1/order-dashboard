import { useMemo } from 'react';

const useFilteredSortedOrders = (orders, searchTerm, sortField, sortDirection) => {
    const filteredOrders = useMemo(() =>
        orders.filter(order =>
            order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            order.id.toLowerCase().includes(searchTerm.toLowerCase())
        ), [orders, searchTerm]);

    const sortedOrders = useMemo(() =>
        [...filteredOrders].sort((a, b) => {
            const fieldA = a[sortField];
            const fieldB = b[sortField];
            if (fieldA < fieldB) return sortDirection === 'asc' ? -1 : 1;
            if (fieldA > fieldB) return sortDirection === 'asc' ? 1 : -1;
            return 0;
        }), [filteredOrders, sortField, sortDirection]);

    return sortedOrders;
};

export default useFilteredSortedOrders;
