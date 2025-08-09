import React from 'react'

const JSX_Expression = () => {
    const x = 2;
    const myName = "ksrawat";
    const speacialClass = 'abc';
    const multiply = (a,b) => a*b;
  return (
    <div>
        <h1>JSX Expression</h1>
        <p> 2 + 2 </p>
        <p>{ x + 2 }</p>
        
        <h3>my name is {myName}</h3>

        <h3>fruits array: {[" banana", " mango", " apple", " pink"]}</h3>

        <h3>calling multiply function, 5*2 = {multiply(5,2)}</h3>

        <section className={speacialClass}>what is its class name?</section>
    </div>
  )
}

export default JSX_Expression