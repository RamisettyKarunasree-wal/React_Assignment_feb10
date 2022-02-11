import axios from "axios";
import { useEffect, useState } from "react";

let AllProducts = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then(function (res) {
            setData(res.data);
        })
    }, []);

    return (
        <div>
            {
                data.map((val, index) => {
                    return (
                        <div className="item">
                            <div><img className="image" src={val.image}/></div>
                            <div className="id"><b>Product Id: {val.id}</b></div>
                            <div className="title">{val.title.charAt(0).toUpperCase() + val.title.toLowerCase().slice(1,22)}...</div>
                            <div className="rating">({val.rating.count} Customers bought this product)</div>
                            <div className="price">{val.price}$</div>
                        </div>
                    )
                })
            }
        </div>
    );
}
export default AllProducts;