import React from 'react'

const Weather = ({temperature}) => {

    if(temperature<15){
        return <h2>It's cold outside</h2>
    }else if(temperature>=15 && temperature<=25){
        return <h2>It's nice outside</h2>
    }else{
        return <h2 style={{color: "red"}}>It's hot outside</h2>
    }
}

export default Weather