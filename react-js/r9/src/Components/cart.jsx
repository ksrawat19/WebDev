import React from 'react'

const Cart = () => {

    const items = ["banana", "apple", "mango"];

  return (
    <div>
        <h1>Cart 🛒</h1>
        {items.length > 0 && <p>there are {items.length} items</p>}

        <ul>{
            items.map((item, index)=>(
                <li key={index}>{item}</li>
            ))
        }</ul>
    </div>
  )
}

export default Cart