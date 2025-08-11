import React, { useState } from 'react'

const ShopingList = () => {

    const [item, setItem] = useState([]);
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');

    const submitHandler = (event)=>{
        event.preventDefault();

        if (!name.trim() || quantity <= 0) return;

        const itemObj = {
            // name: name,
            name,
            quantity: parseInt(quantity)
        };

        setItem((prevItem) => [...prevItem, itemObj]);

        setName('');
        setQuantity('');
    }
    return (
        <div>
            <h1>Shopping list</h1>
            <form onSubmit={submitHandler}>
                <input type="text" value={name} name='name' onChange={(e)=>setName(e.target.value)}/>
                <input type="number" value={quantity} name='quantity' onChange={(e)=>setQuantity(e.target.value)}/>
                <button type='submit'>Add item</button>
            </form>

            <ol>{
                    item.map((item, index)=>(
                        <li key={index} style={{fontSize: "1.3rem", color: "darkblue"}}>
                            Item: {item.name} - Quantity: {item.quantity}
                        </li>
                    ))
                }
            </ol>
        </div>
    )
}

export default ShopingList