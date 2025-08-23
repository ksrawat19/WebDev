import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css"

const Meals = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios
            .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
            .then((res) => {
                // console.log(res.data.meals);
                setItems(res.data.meals);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);


    const itemList = items.map((item)=>( // here we can also use destructors
        <section className="card" key={item.idMeal}>
            <img src={item.strMealThumb} alt={item.strMeal} />
            <section className="content">
                <p>{item.strMeal}</p>
                <p>#{item.idMeal}</p>
            </section>
        </section>
    ))

    return <div className="items-container">{itemList}</div>   
};
export default Meals;