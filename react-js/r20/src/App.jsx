import React from 'react'
import Component1 from './Components/Component1'

// Prop drilling happens when you pass data (props) from a top-level component down through many layers — even through components that don’t need the data — just to reach a deeply nested child.

// React Context API (most common)

const App = () => {

    const name = "ksrawat"
    return (
        <div>
            <Component1 name={name} />
        </div>
    )
}

export default App