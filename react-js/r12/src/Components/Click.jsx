import React from 'react'

const Click = () => {

    const clickHandler = ()=>{
        console.log("button is clicked");
    }

    return (
        <div>
            <button onClick={clickHandler}>Click Me</button>
        </div>
    )
}

export default Click