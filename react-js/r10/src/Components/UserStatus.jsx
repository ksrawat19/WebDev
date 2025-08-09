import React from 'react'

const UserStatus = ({isLoggedIn, isAdmin}) => {
    if(isLoggedIn && isAdmin) return <h2>Welcome Admin!!</h2>
    if(isLoggedIn && isAdmin==false) return <h2>Welcome User!!</h2>
}

export default UserStatus