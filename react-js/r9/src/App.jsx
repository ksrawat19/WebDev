import React from 'react'
import Cart from './Components/cart'

const ValidPassword = ()=> <h2>Valid Password</h2>
const InvalidPassword = ()=> <h2>Invalid Password</h2>

const CheckPassword = ({isValid})=>{
    // if(isValid){
    //     return <ValidPassword/>
    // }
    // return <InvalidPassword/>

    // or

    return isValid? <ValidPassword/>: <InvalidPassword/>;
}

const App = () => {

    const pass = false
    return (
        <div>
            <CheckPassword isValid={pass} />
            <Cart/>
        </div>
    )
}

export default App