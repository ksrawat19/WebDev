import React from 'react'
import Counter from './Components/Counter'
import TodoList from './Components/TodoList'
import Profile from './Components/Profile'
import ShopingList from './Components/ShopingList'

const App = () => {
  return (
    <div>
        <Counter />
        <TodoList />
        <Profile />
        <ShopingList />
    </div>
  )
}

export default App