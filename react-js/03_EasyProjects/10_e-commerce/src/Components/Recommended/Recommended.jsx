import "../../style/recommended.css";
import Button from "../Button";

const Recommended = ({ buttonHandler }) => {
    return (
        <div>
            <h2 className="recommended-title">Recommended</h2>
            <div className="recommended-flex">
                <Button
                    onClickHandler={buttonHandler}
                    value=""
                    title="All Products"
                />
                <Button
                    onClickHandler={buttonHandler}
                    value="Nike"
                    title="Nike"
                />
                <Button
                    onClickHandler={buttonHandler}
                    value="Adidas"
                    title="Adidas"
                />
                <Button
                    onClickHandler={buttonHandler}
                    value="Puma"
                    title="Puma"
                />
                <Button
                    onClickHandler={buttonHandler}
                    value="Vans"
                    title="Vans"
                />
            </div>
        </div>
    );
};

export default Recommended;
