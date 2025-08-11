import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);

    const clickHandler = ()=>{
        setCount(count+1);
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={clickHandler}>update count</button>
            <button onClick={()=> setCount(count-1)}>update count</button>
        </div>
    )
}

export default Counter