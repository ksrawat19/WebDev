import React from 'react'
import { IoBeerOutline } from "react-icons/io5";

const IconComponent = () => {
  return (
    <div style={{color: "darkBlue", backgroundColor: "lightblue", marginTop: "10px", borderRadius: "10px"}}>
        <IoBeerOutline style={{fontSize: "90px",  marginTop: "10px"}} />
        <p style={{padding: "10px"}}>how is this icon looking? i got it from react-icons</p>
    </div>
  )
}

export default IconComponent