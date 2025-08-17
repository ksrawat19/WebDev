const initialState = {count: 1};

const counterReducer = (state, action) =>{
    switch(action.type){
        case "increment":
            return {...state, count: state.count+1};
            break;
        case "decrement":
            return {...state, count: state.count-1};
            break;
        case "incrementByVal":
            return {...state, count: state.count+action.payload};
            break;
        case "decrementByVal":
            return {...state, count: state.count-action.payload};
            break;
        case "reset":
            return {...state, count: state.count=0};
            break;
        default:
            return {state};
    }
}
export { initialState, counterReducer };