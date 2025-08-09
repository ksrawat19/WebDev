import React from 'react'

const List = () => {

    const array = [2, 34, 46, 3, 45];

    return (
        <h2>
            <ul>
            {
                array.map((array)=>(
                    <li key={array}>{array}</li>
                ))
            }
            </ul>
        </h2>
    )
}

export default List