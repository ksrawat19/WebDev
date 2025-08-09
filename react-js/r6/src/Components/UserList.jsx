import React from 'react'

const UserList = () => {

    const userList = [
        { id: 1, name: "Khem Singh", age: "19", country: "India" },
        { id: 4, name: "Yuki Tanaka", age: "17", country: "Japan" },
        { id: 5, name: "Carlos Ruiz", age: "21", country: "Mexico" }
    ];

    return (
        <div>
            <h1>User List</h1>
            {   
                userList.map((user)=>(
                    <ul key={user.id}>
                        <li><strong>{user.name}</strong></li>
                        <li>{user.age}</li>
                        <li>{user.country}</li>
                    </ul>
                ))
            }
        </div>
    )
}

export default UserList