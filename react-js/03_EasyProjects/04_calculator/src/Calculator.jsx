import { useState } from "react";
import "./index.css"

const Calculator = () => {
    const [input, setInput] = useState("");

    const display = (ch) => {
        setInput(input + ch);
    };
    const allClear = () => {
        setInput("");
    };
    const clear = () => {
        setInput(input.slice(0, -1));
    };
    const calculate = () => {
        try {
            const res = eval(input);
            setInput(res.toString());
        } catch {
            setInput("Error");
        }
    };

    return (
        <div className="container">
            <form>
                <input type="text" value={input} readOnly />
                
                <span onClick={() => allClear()}>ac</span>
                <span onClick={() => clear()}>x</span>
                <span className="operator" onClick={() => display("/")}>/</span>
                <span className="operator" onClick={() => display("*")}>*</span>
                <span onClick={() => display("7")}>7</span>
                <span onClick={() => display("8")}>8</span>
                <span onClick={() => display("9")}>9</span>
                <span className="operator" onClick={() => display("-")}>-</span>
                <span onClick={() => display("4")}>4</span>
                <span onClick={() => display("5")}>5</span>
                <span onClick={() => display("6")}>6</span>
                <span className="operator tall" onClick={() => display("+")}>+</span>
                <span onClick={() => display("1")}>1</span>
                <span onClick={() => display("2")}>2</span>
                <span onClick={() => display("3")}>3</span>
                <span onClick={() => display("%")}>%</span>
                <span onClick={() => display("0")}>0</span>
                <span onClick={() => display(".")}>.</span>
                <span className="operator" onClick={() => calculate()}>=</span>
            </form>
        </div>
    );
};
export default Calculator;
