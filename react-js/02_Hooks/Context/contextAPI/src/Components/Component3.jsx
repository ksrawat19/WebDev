import { Data } from "../App"
import { Data1 } from "../App"

const Component3 = () => {

    return (
        <Data.Consumer>
            {(name)=>{
                    return (<Data1.Consumer>
                        {(age)=>{
                            return (<h1>My name is {name} and i am {age} years old.</h1>)
                        }}
                    </Data1.Consumer>
                    )
            }}
        </Data.Consumer>
    )
}
export default Component3