import React, { useState } from 'react'

const Profile = () => {

    const [profile, setProfile] = useState({
        name: "",
        age: ""
    })

    const changeHandler = (event)=>{
        
        const name = event.target.name;
        const value = event.target.value;

        // above object destructuring
        // const {name, value} = event.target;

        setProfile((prevProfile)=>({
            ...prevProfile,
            [name]: value

        }));
    }

    return (
        <div>
            <h1>Profile</h1>
            <p style={{fontSize: "1.25rem", color: "orange"}}>Name: {profile.name}</p>
            <p style={{fontSize: "1.25rem", color: "orange"}}>Age: {profile.age}</p>


            <div>
                <label>Change Name:
                    <input type="text" name="name" value={profile.name} onChange={changeHandler}/>
                </label>
            </div>
            <div>
                <label>Change Age:
                    <input type="number" name="age" value={profile.age} onChange={changeHandler}/>
                </label>
            </div>

        </div>
    )
}

export default Profile