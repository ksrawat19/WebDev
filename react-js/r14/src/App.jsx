import React, { useState } from 'react'
import Component1 from './Components/Component1'
import Component2 from './Components/Component2'

const App = () => {

    // sharing of state using props, parent to child component
    const [count, setCount] = useState(0);

    return (
        <div>
            <Component1 count={count} onClickHandler={()=>setCount(count+1)}/>
            <Component2 count={count} onClickHandler={()=>setCount(count+1)}/>
        </div>
    )
}

export default App