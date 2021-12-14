import "./App.css";
import React, { useState, useEffect } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SideBar from "./Components/Sidebar";
import Cloths from "./Components/Cloths";
import Food from "./Components/Food";
import axios from "axios";
import Cart from "./Components/Cart";
export const itemsContext = React.createContext();
const url = "https://614eabfab4f6d30017b482c4.mockapi.io/personDetail";

function App() {
  useEffect(() => {
    getData();
  }, []);

  const [data, setData] = useState([]);
  let [cart, setCart] = useState([]);
  let [cartValue, setCartValue] = useState(cart.length);

  const getData = async () => {
    let res = await axios.get(
      "https://614eabfab4f6d30017b482c4.mockapi.io/personDetail"
    );
    //console.log(res.data);
    setData(res.data);
  };

  return (
    <>
      <Router>
        <itemsContext.Provider
          value={{ data, cart, setCart, cartValue, setCartValue, url }}
        >
          <div className="navbar">
            <div className="shop-name"><h3>Nature Cart</h3></div>
            <div className="cart-value">
              <h4>
                <FaCartArrowDown />
              </h4>
              <h4 className="cart-number">{cartValue}</h4>
            </div>
          </div>
          <div className="main-container">
            <div className="sidebar">
              <SideBar />
            </div>
            <div className="items-box">
              <Routes>
                <Route path="cloths" element={<Cloths />} />
                <Route path="food" element={<Food />} />
                <Route path="/" element={<Cloths />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </div>
          </div>
        </itemsContext.Provider>
      </Router>
    </>
  );
}

export default App;
