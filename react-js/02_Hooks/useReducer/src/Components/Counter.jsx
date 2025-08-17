import { useReducer } from "react"

const initialState = {count: 0};

function reducer(state, action){
    switch(action.type){
        case "increment":
            return {...state, count: state.count+1};
            break;
        case "decrement":
            return {...state, count: state.count-1};
            break;
        case "reset":
            return {...state, count: state.count=0}
            break;
        default:
            return state;
    }
}

const Counter = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    // state: current state value
    // dispatch: function to send actions
    // reducer: function that handles state transitions
    // initialState: starting state
    return (
        <div>
            <h1>use reducer</h1>
            <button onClick={()=>dispatch({type: "increment"})}>+</button>
            <button onClick={()=>dispatch({type: "decrement"})}>-</button>
            <button onClick={()=>dispatch({type: "reset"})}>reset</button>
            <h1>Count: {state.count}</h1>
        </div>
    )
}
export default Counter