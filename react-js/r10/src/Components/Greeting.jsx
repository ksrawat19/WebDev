import React from 'react'

const Greeting = (props) => {
    
    return props.timeOfDay=="morning"? <h2>Good Morning!!</h2>: <h2>Good Afternoon!!</h2>;
}

export default Greeting