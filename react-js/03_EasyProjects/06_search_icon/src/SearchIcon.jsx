import { useState } from "react"
import { FaSearch } from "react-icons/fa";
import "./index.css"

const SearchIcon = () => {

    const [showInput, setShowInput] = useState(false);
    const [bgColor, setBgColor] = useState("white");

    const clickHandler = (e)=>{
        setBgColor("#1a1a1a");
        if(e.target.className==="container"){
            setBgColor("#fff");
            setShowInput(false);
        }
    }

    return (
        <section
            className="container"
            style={{ backgroundColor: bgColor }}
            onClick={clickHandler}
        >
            {(showInput)? (
                <input
                    type="text"
                    placeholder="Search..."
                />
            ):(
                <FaSearch onClick={() => setShowInput(true)} />
            )}
        </section>
    )
}
export default SearchIcon