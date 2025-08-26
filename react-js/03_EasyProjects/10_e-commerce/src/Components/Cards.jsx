import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";

const Cards = () => {

    const star = <AiFillStar />;

    return (
        <section className="card">
            <img
                src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
                alt="Nikke"
                className="card-img"
            />
            <div className="card-details">
                <h3 className="card-title">Nikke</h3>
                <section className="card-reviews">
                    {star} {star} {star} {star}
                    <span className="total-reviews">123</span>
                </section>
                <section className="card-price">
                    <div className="price">
                        <del>4999</del> 299
                    </div>
                    <div className="bag">
                        <BsFillBagHeartFill className="bag-icon" />
                    </div>
                </section>
            </div>
        </section>
    );
};
export default Cards;
