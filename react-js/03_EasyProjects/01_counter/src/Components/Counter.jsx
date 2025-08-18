import { useState } from "react"
import "../index.css"

const Counter = () => {

    const [count, setCount] = useState(0);

    const incrementHandler = ()=> setCount(count+1);
    const decrementHandler = ()=> setCount(count-1);
    const resetHandler = ()=> setCount(0);

    return (
        <div className="container">
            <h1 className="number">{count}</h1>
            <div className="btns-container">
                <button onClick={incrementHandler} className="increment" >+</button>
                <button onClick={decrementHandler} className="decrement">-</button>
            </div>
            <button onClick={resetHandler} className="reset">Reset</button>
        </div>
    )
}
export default Counter