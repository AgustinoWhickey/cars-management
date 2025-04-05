'use client';
import {useState } from 'react';
import {createOrders} from '../lib/api';

export default function OrderForm({onSuccess}){
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [dayRate, setDayRate] = useState('');
    const [monthRate, setMonthRate] = useState('');

    const handleSubmit = async () => {
        if(!name || !dayRate) return;
        await createOrders({name, image, monthRate, dayRate});
        setName('');
        setDayRate('');
        // onSuccess();
    }

    return (
        <div>
            <input 
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ marginBottom: 8, marginLeft: 8 }}
            />
            <br />
            <input 
                placeholder='Day Rate'
                value={dayRate}
                onChange={(e) => setDayRate(e.target.value)}
                style={{ marginBottom: 8, marginLeft: 8 }}
            />
            <br />
            <input 
                placeholder='Month Rate'
                value={dayRate}
                onChange={(e) => setDayRate(e.target.value)}
                style={{ marginBottom: 8, marginLeft: 8 }}
            />
            <br />
            <input 
                type="file"
                accept='image/*'
                style={{ marginBottom: 8, marginLeft: 8 }}
            />
            <br />
            <button onClick={handleSubmit}>Add</button>
        </div>
    )
}