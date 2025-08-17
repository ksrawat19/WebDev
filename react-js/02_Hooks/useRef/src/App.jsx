import { useRef } from "react"

const App = () => {

    const inputElement = useRef(null);

    const clickHandler = ()=>{
        inputElement.current.focus();
        inputElement.current.value = "ksrawat";
    }

    return (
        <>
            <input
                type="text"
                ref={inputElement}
            />
            <button onClick={clickHandler}>Foucus & write ksrawat</button>
        </>
    );
}
export default App