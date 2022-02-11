import { useEffect, useState } from "react";
import axios from "axios";
let Categories = () => {
    const [change, setChange] = useState(false);
    const [categories, setCategory] = useState([]);
    const [cat,setCat]=useState("");
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/categories").then(function (res) {
            setCategory(res.data);
        })
    }, []);
    const [data, setData] = useState([]);
    function showProducts(event) {
        axios.get("https://fakestoreapi.com/products").then(function (res) {
            setCat(event.target.value);
            if(event.target.value==="All" || event.target.value==="Select Category"){
                setChange(false);
            }
            else{
                setChange(true);
            }
            setData(res.data.filter(function (val, index) {
                if (val.category == event.target.value) {
                    return true;
                }
                else {
                    return false;
                }
            }))
        })
    }
    return (
        <div>
            <select onChange={showProducts}>
                <option>Select Category</option>
                <option>All</option>
                {
                    categories.map(function (val, index) {
                        return (<option value={val}>{val}</option>)
                    })
                }
            </select>
            {change ? <div className="category">
                <h1>Category: {cat}</h1>
                {
                    data.map((val, index) => {
                        return (
                            <div className="item">
                                <div><img className="image" src={val.image} /></div>
                                <div className="id"><b>Product Id: {val.id}</b></div>
                                <div className="title">{val.title.charAt(0).toUpperCase() + val.title.toLowerCase().slice(1, 22)}...</div>
                                <div className="rating">({val.rating.count} Customers bought this product)</div>
                                <div className="price">{val.price}$</div>
                            </div>
                        )
                    })
                }
            </div> : " "
            }
        </div>
    );
}
export default Categories;