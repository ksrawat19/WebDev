import { useState } from "react"
import "./index.css"

const Testamonails = () => {

    const [currIndex, setCurrIndex] = useState(0);

    const testamonails = [
    {
      quote: "This is the best product I've ever used!",
      author: "Jane Doe",
    },
    {
      quote: "I highly recommend this product to everyone!",
      author: "John Smith",
    },
    {
      quote: "This product has completely changed my life!",
      author: "Bob Johnson",
    },
    ];

    const prevHandler = ()=>{
        setCurrIndex(
            (currIndex + (testamonails.length-1)) % testamonails.length
        )
    }
    const nextHandler = ()=>{
        setCurrIndex(
            (currIndex+1) % testamonails.length
        )
    }
    
    return (
        <div className="testimonial-wrapper">
            <div className="testimonial-quote">
                {testamonails[currIndex].quote}
            </div>
            <div className="testimonial-author">
                - {testamonails[currIndex].author}
            </div>
            <div className="testimonial-controls">
                <button onClick={prevHandler}>prev</button>
                <button onClick={nextHandler}>next</button>
            </div>
        </div>
    )
}
export default Testamonails