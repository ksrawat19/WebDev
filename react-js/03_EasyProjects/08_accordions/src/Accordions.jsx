import { useState } from "react"
import './index.css'

const Accordions = ({title, content}) => {

    const [isActive, setIsActive] = useState(false);

    return (
        <section className="accordion"> 
            <div className="accordion-header" onClick={()=>setIsActive(!isActive)}>
                <div>{title}</div>
                <p>{(isActive)? "-": "+"}</p>
            </div>
            <div className="accordion-content">
                {(isActive) && <p>{content}</p>}
            </div>
        </section>
    )
}
export default Accordions