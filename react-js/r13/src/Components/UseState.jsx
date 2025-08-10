import React from 'react'
import { useState } from 'react';

const UseState = () => {

    const counter = useState(19);
    console.log(counter);

    // after destructring useState
    const [count, setCount] = useState(0);

    const sum = ()=> setCount(count+1);
    const sub = ()=> setCount(count-1);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={sum}>+</button>
            <button onClick={sub}>-</button>
        </div>
    )
}

export default UseState