import axios from 'axios';
import { useEffect, useState } from "react";
let Product = (props) => {
    let [item, setItem] = useState({});
    let [foundItem, setFoundItem] = useState(true);
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${props.pid}`).then((res) => {
            if (res.data !== null) {
                setFoundItem(true);
                let obj = {
                    Title: res.data["title"],
                    Price: res.data["price"],
                    Description: res.data["description"],
                    Image: res.data["image"],
                    Id: res.data["id"],
                    Rating: res.data["rating"]["rate"],
                    Count: res.data["rating"]["count"],
                    Category: res.data["category"],
                }
                setItem(obj);
            }
            else {
                setFoundItem(false);
            }
        })
    }, [props.pid])
    return (
        <div>
            {foundItem ? <div className='productItem'>
                <div className='searchResult'>Here are Your Search Results......</div>
                <div className="pitem item">
                    <div><img className="image" src={item.Image} /></div>
                </div>
                <div className="findItem">
                    <p className="pId"><b>Product Id : </b>{item.Id}</p>
                    <p className="pTitle"><b>Product Name : </b>{item.Title}</p>
                    <p className="pPrice"><b>Product Price : </b>{item.Price}$</p>
                    <p className="pDescription"><b>Product Description : </b>{item.Description}</p>
                    <p className="pRating"><b>Product Rating : </b>{item.Rating}</p>
                    <p className="pCount"><b>Rating Count : </b>{item.Count}</p>
                    <p className="pCategory"><b>Product Category : </b>{item.Category}</p>
                </div>
            </div> : <div className='searchResult noItem'>Sorry...No Item Found With that product Id</div>}
        </div>
    )
}
export default Product;