import { createContext, useState } from 'react'

const UserContext = createContext();

const UserProvider = ({children}) => {

    const [user, setUser] = useState({name: "ksrawat"});

    const updateUser = (newUser)=>{
      setUser({name: newUser})
    }

    return (
      <UserContext.Provider value={{user, updateUser}}>
        {children}
      </UserContext.Provider>
    )
}
export { UserContext, UserProvider }