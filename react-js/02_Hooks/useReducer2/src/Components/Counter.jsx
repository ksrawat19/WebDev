import { useReducer, useState } from "react"
import { initialState, counterReducer } from "../counterReducer.js"

const Counter = () => {

    const [state, dispatch] = useReducer(counterReducer, initialState);
    const [inputValue, setInputValue] = useState('');
    
    const incrementHandler = ()=>{
        dispatch({type: "incrementByVal", payload: Number(inputValue)});
        setInputValue('');
    }
    const decrementHandler = ()=>{
        dispatch({type: "decrementByVal", payload: +(inputValue)});
        setInputValue('');
    }

    return (
        <div>
            <h1>Count: {state.count}</h1>
            <button onClick={()=>dispatch({type: "increment"})}>+</button>
            <button onClick={()=>dispatch({type: "decrement"})}>-</button>
            <button onClick={()=>dispatch({type: "reset"})}>reset</button>

            <div>
                <input 
                    type="text" 
                    placeholder="enter value"
                    value={inputValue}
                    onChange={(e)=>setInputValue(e.target.value)}
                />
                <button onClick={incrementHandler}>+</button>
                <button onClick={decrementHandler}>-</button>
            </div>
        </div>
    )
}
export default Counter