import { useRef } from "react"

const FocusInput = () => {

    const inputRef = useRef(null);

    function clickHandler(){
        if (inputRef.current) {
        inputRef.current.focus();
        }
    }

    return (
        <div>
            <input 
                type="text" 
                ref={inputRef}
            />
            <button onClick={clickHandler}>Focus Karo</button>
        </div>
    )
}
export default FocusInput