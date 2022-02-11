import './App.css';
import Product from './Product';
import AllProducts from './AllProducts';
import { useState } from 'react';
import Menu from './Menu';
function App() {
  let [Pid, setPid] = useState(1);
  let [status, setStatus] = useState(false);
  return (
    <div className="App">
      <Menu></Menu>
      <form onSubmit={(event) => {
        event.preventDefault();
        setStatus(true);
        setPid(event.target.inputVal.value)
      }}>
        <div className='search'>
          <input className="searchInput" type="number" name="inputVal" placeholder='Search for Product with Product id' />
          <button className="searchButton">Get Product</button>
        </div>
      </form>
      {status ? <button className="closeButton" onClick={() => { setStatus(false) }}>X</button> : ""}
      {status ? <Product pid={Number(Pid)}></Product> : ""}
      <AllProducts></AllProducts>
    </div>
  );
}

export default App;
