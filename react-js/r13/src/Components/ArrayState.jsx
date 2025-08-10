import React, { useState } from 'react'

const ArrayState = () => {

    const [fruits, setFruits] = useState(["apple", "banana", "mango"])

    const addFruit = ()=> setFruits([...fruits, "grapes"])

    const removeFruit = ()=> setFruits(
        fruits.filter((fruit)=> fruit!=="mango")
    )

    const updateFruit = ()=>{
        setFruits(fruits.map(fruit=>(
            fruit==="apple"? "apple Rawat": fruit
        )))
    }

    return (
        <div>
            {
                fruits.map((fruit)=>(
                    <li key={Math.random()}>{fruit}</li>
                ))
            }

            <button onClick={addFruit}>Add new fruit</button>
            <button onClick={removeFruit}>Remove fruit</button>
            <button onClick={updateFruit}>Update fruit</button>
        </div>
    )
}

export default ArrayState