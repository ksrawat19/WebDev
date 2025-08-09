import React from 'react'

const ProductInfo = () => {
    const obj = {
        name: "laptop",
        price: "58000",
        avaliability: "In Stock"
    };

    return (
        <div>
            <h3>name : {obj.name}</h3>
            <h3>price : {obj.price}</h3>
            <h3>avaliability : {obj.avaliability}</h3>
        </div>
    )
}

export default ProductInfo;