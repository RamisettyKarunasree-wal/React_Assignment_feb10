import { useEffect,useState } from "react";
import axios from "axios";
let Categories=()=>{
    const [categories, setCategory] = useState([]);
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/categories").then(function (res) {
            setCategory(res.data);
        })
    }, []);
    return (
        <select>
            <option>Select Category</option>
            {
                categories.map(function(val,index){
                    return (<option value={val}>{val}</option>)
                })
            }
        </select>
    );
}
export default Categories;