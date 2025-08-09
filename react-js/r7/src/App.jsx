import React from 'react'
import profilePic from './Assets/pichu_ProfilePic.jpg';

const App = () => {
  return (
    <div>
        <User
            img={profilePic}
            name="pikachu"
            age={7}
            isMarried={false}
            hobbies={[" eating", " fighting", " sleeping"]}
        />
    </div>
  )
}

// const User = (props)=>{
const User = ({img, name, age, isMarried, hobbies})=>{
    return (
        <div>
            <img src={img} alt={name} width={200}/>
            <p>{name}</p>
            <p>{age}</p>
            <p>{isMarried ? "Married" : "Single"}</p>
            <ul>
                {
                    hobbies.map((hobby, index)=>(
                        <li key={index}>{hobby}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default App