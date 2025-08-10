import React from 'react'
import UseState from './Components/UseState'
import ArrayState from './Components/ArrayState'
import ObjectState from './Components/ObjectState'
import ArrayObjectState from './Components/ArrayObjectState'

const App = () => {
  return (
    <div>
        <UseState />
        <ArrayState />
        <ObjectState />
        <ArrayObjectState />
    </div>
  )
}

export default App