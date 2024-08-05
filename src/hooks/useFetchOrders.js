import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const useFetchOrders = () => {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrders = async () => {
            setIsLoading(true);
            try {
                const querySnapshot = await getDocs(collection(db, 'orders'));
                const ordersData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setOrders(ordersData);
            } catch (error) {
                setError(error);
                console.error('Error fetching orders:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchOrders();
    }, []);

    return { orders, isLoading, error };
};

export default useFetchOrders;
