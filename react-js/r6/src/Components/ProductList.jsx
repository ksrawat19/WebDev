import React from 'react'

const ProductList = () => {
    
    const productList = [
        { id: 101, name: "Wireless Mouse", price: 799 },
        { id: 102, name: "Mechanical Keyboard", price: 2499 },
        { id: 103, name: "HD Monitor", price: 9999 },
        { id: 104, name: "USB-C Hub", price: 1299 },
        { id: 105, name: "Bluetooth Speaker", price: 1999 }
    ];
    
    return (
        <div>
            <h1>Product List</h1>
            {
                productList.map(({id, name, price})=>(
                    <ol key={id}>
                        <li><strong>{name}</strong></li>
                        <li>₹{price}</li>
                    </ol>
                ))
            }
        </div>
    )
}

export default ProductList