import "../../style/nav.css";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

const Navigation = () => {
    return (
        <nav>
            <div>
                <input
                    className="search-input"
                    type="text"
                    placeholder="Enter your search shoes"
                />
            </div>
            <div>
                <a href="#">
                    <FiHeart className="nav-icons" />
                </a>
                <a href="#">
                    <AiOutlineShoppingCart className="nav-icons" />
                </a>
                <a href="#">
                    <AiOutlineUserAdd className="nav-icons" />
                </a>
            </div>
        </nav>
    );
};
export default Navigation;
