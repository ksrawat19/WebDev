import React from 'react'
import Person from './Components/Person'
import Product from './Components/Product'
import Cards from './Components/Cards'

const App = () => {
  return (
    <div>
        <Person
            name = "Pritam"
            age = {17}
        />
        <Product
            name="Laptop"
            price={59000}
        />
        {/* pass data (JSX) as props by closed tags */}
        <Cards>
          <h2>This is Card</h2>
          <p>this is para of card</p>
        </Cards>
    </div>
  )
}

export default App