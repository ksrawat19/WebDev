import React from 'react'
import Weather from './Components/Weather'
import Greeting from './Components/Greeting'
import UserStatus from './Components/UserStatus'

const App = () => {
  return (
    <div>
        <Weather temperature={35} />
        <UserStatus isLoggedIn={false} isAdmin={true} />
        <Greeting timeOfDay={"afternoon"} />
    </div>
  )
}

export default App