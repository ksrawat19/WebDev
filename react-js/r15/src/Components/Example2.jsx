import React, { useState } from 'react'

const Example2 = () => {

    const [randomN, setRandomN] = useState(()=>{
        return Math.floor(Math.random()*100);
    });

    const clickHandler = ()=>{
        setRandomN(Math.floor(Math.random()*100))
    }

    return (
        <div>
            <h1>Random Number: {randomN}</h1>
            <button onClick={clickHandler}>Update Random</button>
        </div>
    )
}

export default Example2