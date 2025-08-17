import { useContext } from "react"
import { Data, Data1 } from "../App"

const Component3 = () => {

    const userName = useContext(Data); 
    const userAge = useContext(Data1); 

    return (
        <div>
            <h1>My name is {userName}</h1>
            <h2>I'm {userAge} years old</h2>
        </div>
    )
}
export default Component3