import React from 'react'

const Component2 = ( {count, onClickHandler} ) => {

    const clickHandler = ()=> onClickHandler();

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={clickHandler}>Changes through child2 to parent state</button>
        </div>
    )
}

export default Component2