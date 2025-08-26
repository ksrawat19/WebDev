import { useState } from "react";
import products from "./Database/data.jsx";
import Navigation from "./Components/Navigation/Navigation";
import Product from "./Components/Product/Product";
import Recommended from "./Components/Recommended/Recommended";
import Sidebar from "./Components/Siderbar/Sidebar";
import "./index.css";
import Cards from "./Components/Cards";

const App = () => {
    const [query, setQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(null);

    // handle input filer
    const inputHandler = (e) => {
        setQuery(e.target.value);
    };
    const filteredItems = products.filter((product) =>
        product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );

    // radio filter
    const radioHandler = (e) => {
        setSelectedCategory(e.target.value);
    };

    // buttoon filter
    const buttonHandler = (e) => {
        setSelectedCategory(e.target.value);
    };

    function filterData(products, selected, query) {
        let filteredProduct = products;

        // filtering inputs
        if (query) {
            filteredProduct = filteredItems;
        }

        if (selected) {
            filteredProduct = filteredProduct.filter(
                ({ category, color, price, company, title }) =>
                    category === selected ||
                    color === selected ||
                    price === selected ||
                    company === selected ||
                    title === selected
            );
        }

        return filteredProduct.map(
            ({ img, title, star, reviews, prevPrice, newPrice }) => (
                <Cards
                    key={Math.floor(Math.random() * 1000)}
                    img={img}
                    title={title}
                    star={star}
                    reviews={reviews}
                    prevPrice={prevPrice}
                    newPrice={newPrice}
                />
            )
        );
    }
    const result = filterData(products, selectedCategory, query);

    return (
        <>
            <Sidebar radioHandler={radioHandler} />
            <Navigation query={query} inputHandler={inputHandler} />
            <Recommended buttonHandler={buttonHandler} />
            <Product result={result} />
        </>
    );
};
export default App;
