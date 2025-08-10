import React, { useState } from 'react'

const Example1 = () => {

    const [count, setCount] = useState(()=>{
        const initVal = 19;
        return initVal;
    })

    const clickHandler = ()=>{
        // setCount(count+1);
        setCount((prevCount)=> prevCount+1)
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={clickHandler}>Update Count</button>
        </div>
    )
}

export default Example1