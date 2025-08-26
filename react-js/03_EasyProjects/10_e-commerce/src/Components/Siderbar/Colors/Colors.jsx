import "../../../style/colors.css";
import Input from "../../Input";

const Colors = ({ radioHandler }) => {
    return (
        <div>
            <h2 className="sidebar-title color-title">Colors</h2>
            <label className="sidebar-label-container">
                <input
                    onChange={radioHandler}
                    type="radio"
                    value=""
                    name="test1"
                />
                <span className="checkmark all"></span>
                All
            </label>

            <Input
                radioHandler={radioHandler}
                value="black"
                title="Black"
                name="test1"
                color="black"
            />

            <Input
                radioHandler={radioHandler}
                value="blue"
                title="Blue"
                name="test1"
                color="blue"
            />

            <Input
                radioHandler={radioHandler}
                value="red"
                title="Red"
                name="test1"
                color="red"
            />

            <Input
                radioHandler={radioHandler}
                value="green"
                title="Green"
                name="test1"
                color="green"
            />

            <label className="sidebar-label-container">
                <input
                    onChange={radioHandler}
                    type="radio"
                    value="white"
                    name="test1"
                />
                <span
                    className="checkmark"
                    style={{ background: "white", border: "2px solid black" }}
                ></span>
                White
            </label>
        </div>
    );
};
export default Colors;
