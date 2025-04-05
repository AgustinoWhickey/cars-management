'use client';
import { useEffect, useState } from "react";
import { getOrders, deleteOrder } from '../lib/api';
import { useNavigate } from "react-router-dom";

export default function OrderList({reloadTrigger}){
    const [orders, setOrders] = useState([]);

    const navigate = useNavigate();

    const load = async () => {
        const data = await getOrders();
        if(data) {
            const formatted = Object.entries(data).map(([id, val]) => ({id, ...val}));
            setOrders(formatted);
        }
    };

    useEffect(() => {
        load();
    }, [reloadTrigger]);

    const handleDelete = async (id) => {
        await deleteOrder(id);
        load();
    }

    const handleRedirect = () => {
        navigate('/order');
    }

    return (
        <div> 
            <h2>Car Order Lists</h2>
            <button onClick={handleRedirect}>Add New</button>
            <table border="1" cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Day Rate</th>
                        <th>Month Rate</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id}>
                            <td>{order.name}</td>
                            <td>
                                <img src={order.image} alt={order.name} width="50" />
                            </td>
                            <td>{order.day_rate}</td>
                            <td>{order.month_rate}</td>
                            <td><button onClick={() => handleDelete(order.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}