import { createContext } from "react";
import Component1 from "./Components/component1";


export const Data = createContext();
export const Data1 = createContext();

const App = () => {

    const name = "khem";
    const age = 19;
    return (
        <div>
            <h1>name</h1>
            <Data.Provider value={name}>
                <Data1.Provider value={age}>
                    <Component1 />
                </Data1.Provider>
            </Data.Provider>
        </div>
    )
}
export default App