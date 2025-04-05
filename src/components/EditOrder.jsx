'use client';
import {useEffect, useState } from 'react';
import {createOrders, getOrderById, updateOrder} from '../lib/api';

export default function EditOrderForm({onSuccess}){
    // const [order, setOrder] = useState({ name: '', image: '', month_rate: '', day_rate: ''});
    const [order, setOrder] = useState({ name: '', day_rate: ''});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const data = await getOrderById(orderId);
                setOrder(data);
                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        } 
        fetchOrder();
    }, [orderId]);

    const handleChange = (e) => {
        setOrder({...order, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await updateOrder(orderId, dayRate);
            console.log("Update Success!");
        } catch (err) {
            console.log(err);
        }
    }

    if (loading) return <p>Loading...</p>;

    return (
        <form onSubmit={handleSubmit}>
            <h2>Edit Order</h2>
            <input />
        </form>
        // <div>
        //     <input 
        //         placeholder='Name'
        //         value={name}
        //         onChange={(e) => setName(e.target.value)}
        //         style={{ marginBottom: 8, marginLeft: 8 }}
        //     />
        //     <br />
        //     <input 
        //         placeholder='Rate'
        //         value={dayRate}
        //         onChange={(e) => setDayRate(e.target.value)}
        //         style={{ marginBottom: 8, marginLeft: 8 }}
        //     />
        //     <br />
        //     <button onClick={handleSubmit}>Add</button>
        // </div>
    )
}