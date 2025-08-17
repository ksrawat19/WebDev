import { createContext } from "react"
import Component1 from "./Components/Component1"

export const Data = createContext();
export const Data1 = createContext();

const App = () => {

    const name = "ksrawat";
    const age = 19;

    return (
        <div>
            <Data.Provider>
                <Component1 />
            </Data.Provider>
        </div>
    )
}
export default App