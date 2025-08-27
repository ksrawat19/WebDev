import Category from "./Category/Category.jsx"
import Price from "./Price/Price.jsx"
import Colors from "./Colors/Colors.jsx"
import "../../style/sidebar.css"

const Sidebar = ({radioHandler}) => {
    return (
        <section className="sidebar"> 
            <Category radioHandler={radioHandler} />
            <Price radioHandler={radioHandler} />
            <Colors radioHandler={radioHandler} />
        </section>
    )
}
export default Sidebar