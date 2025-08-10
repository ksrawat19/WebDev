import React, { useEffect, useState } from 'react'

const Example3 = () => {

    const [name, setName] = useState(()=>{
        const savedName = localStorage.getItem("name");
        return savedName? JSON.parse(savedName): "";
    })

    useEffect(()=>{
        localStorage.setItem('name', JSON.stringify(name))
    }, [name]);

    const changeHandler = (event)=>{
        setName(event.target.value)
    }

    const clickHandler = ()=> setName('');

    return (
        <div>
            <h1>Your Name: {name}</h1>
            <input type="text" value={name} onChange={changeHandler} placeholder='Enter Your Name'/>
            <button onClick={clickHandler}>Clear Name</button>
        </div>
    )
    }

export default Example3