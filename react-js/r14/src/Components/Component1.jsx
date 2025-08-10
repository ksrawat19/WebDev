import React from 'react'

// destructuring props
function Component1({ count, onClickHandler }){

    function clickHandler(){ onClickHandler(); }

    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={clickHandler}>Changes through child1 to parent state</button>
      </div>
    )
}

export default Component1