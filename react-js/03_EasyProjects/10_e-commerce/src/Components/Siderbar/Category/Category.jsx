import "../../../style/category.css";
import Input from "../../Input";

const Category = ({radioHandler}) => {
    return (
        <div>
            <h2 className="sidebar-title">Category</h2>

            <div>
                <label className="sidebar-label-container">
                    <input
                        onChange={radioHandler}
                        type="radio"
                        value=""
                        name="test"
                    />
                    <span className="checkmark"></span>All
                </label>
                <Input
                    radioHandler={radioHandler}
                    value="sneakers"
                    title="Sneakers"
                    name="test"
                />
                <Input
                    radioHandler={radioHandler}
                    value="flats"
                    title="Flats"
                    name="test"
                />
                <Input
                    radioHandler={radioHandler}
                    value="sandals"
                    title="Sandals"
                    name="test"
                />
                <Input
                    radioHandler={radioHandler}
                    value="heels"
                    title="Heels"
                    name="test"
                />
            </div>
        </div>
    );
};
export default Category;
