import "../../../style/price.css";
import Input from "../../Input";

const Price = ({ radioHandler }) => {
    return (
        <div className="ml">
            <h2 className="sidebar-title price-title">Price</h2>

            <label className="sidebar-label-container">
                <input
                    onChange={radioHandler}
                    type="radio"
                    value=""
                    name="test2"
                />
                <span className="checkmark"></span>All
            </label>

            <Input
                radioHandler={radioHandler}
                value={50}
                title="$0 - 50"
                name="test2"
            />

            <Input
                radioHandler={radioHandler}
                value={100}
                title="$50 - $100"
                name="test2"
            />

            <Input
                radioHandler={radioHandler}
                value={150}
                title="$100 - $150"
                name="test2"
            />

            <Input
                radioHandler={radioHandler}
                value={200}
                title="Over $150"
                name="test2"
            />
        </div>
    );
};
export default Price;
