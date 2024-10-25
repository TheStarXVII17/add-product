import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [product, setProduct] = useState({
        productCode: '',
        name: '',
        description: '',
        price: 0,
        quantity: 0,
        dateAdded: ''
    });

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        alert('Product saved!');
        console.log(product);
    };

    const handleClear = () => {
        setProduct({
            productCode: '',
            name: '',
            description: '',
            price: 0,
            quantity: 0,
            dateAdded: ''
        });
    };

    return (
        <div>
            <h2>Add Product</h2>
            <input name="productCode" value={product.productCode} onChange={handleChange} placeholder="Product Code" />
            <input name="name" value={product.name} onChange={handleChange} placeholder="Name" />
            <input name="description" value={product.description} onChange={handleChange} placeholder="Description" />
            <input name="price" type="number" value={product.price} onChange={handleChange} placeholder="Price" />
            <input name="quantity" type="number" value={product.quantity} onChange={handleChange} placeholder="Quantity" />
            <input name="dateAdded" type="date" value={product.dateAdded} onChange={handleChange} placeholder="Date Added" />
            <button onClick={handleSave}>Save</button>
            <button onClick={handleClear}>Clear</button>
        </div>
    );
}

const handleSave = async () => {
    try {
        const response = await axios.post('http://localhost:3000/products', product);
        alert('Product successfully saved!');
        console.log(response.data);
    } catch (error) {
        console.error('Error saving product:', error);
    }
};

export default App;
