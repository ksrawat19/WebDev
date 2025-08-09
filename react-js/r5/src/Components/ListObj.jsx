import React from 'react'

const ListObj = () => {

    const users = [
        {
            name: "Khem Rawat",
            country: "India",
            email: "khem.rawat@example.com"
        },
        {
            name: "Carlos Mendes",
            country: "Brazil",
            email: "carlos.mendes@example.com"
        },
        {
            name: "Yuki Tanaka",
            country: "Japan",
            email: "yuki.tanaka@example.com"
        }
    ];

    return (
        <div>
            {
                // users.map((user)=>(
                //     <div key={Math.random()}>
                //         <p>{user.name}</p>
                //         <p>{user.country}</p>
                //         <p>{user.email}</p>
                //     </div> 
                // ))

                //  by destructuring js

                users.map(({name, country, email})=>(
                    <div key={Math.random()}>
                        <p>{name}</p>
                        <p>{country}</p>
                        <p>{email}</p>
                    </div> 
                ))
            }
        </div>
    )
}

export default ListObj