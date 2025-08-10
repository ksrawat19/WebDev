import React from 'react'

const Copy = () => {

    function copyHandler(){
        alert("don't steal my content!!")
        console.log("don't steal my content!!");
    }
  return (
    <div>
        <p onCopy={copyHandler}>don't dare to copy my precious content you f theif</p>
    </div>
  )
}

export default Copy