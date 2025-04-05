const API_URL = 'https://67037f39bd7c8c1ccd41a62e.mockapi.io/rent-car/api/v1/cars';

export const getOrders = async () => {
    const res = await fetch(`${API_URL}`);
    return await res.json();
}

export const createOrders = async(order) => {
    const res = await fetch(`${API_URL}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(order)
    })
    return await res.json();
} 

export const deleteOrder = async (id) => {
    const res = await fetch(`${API_URL}/id=${id}`,{
        method: 'DELETE',
    });
    return await res.json();
}

export const getOrderById = async (id) => {
    const response = await axios.get(`${API_URL}/id=${id}`);
    return response.data;
}

export const updateOrder = async (id, data) => {
    const response = await axios.put(`${API_URL}/id=${id}`, data);
    return response.data;
}