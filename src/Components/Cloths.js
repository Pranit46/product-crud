import React, { useContext, useState, useEffect } from "react";
import { itemsContext } from "../App";
import { useNavigate } from "react-router-dom";

function Cloths() {
  let context = useContext(itemsContext);
  //console.log(context.data);

  let [products, setProducts] = useState([]);
  let navigate = useNavigate();

  let getData = () => {
    if (context.data.length > 0) {
      setProducts(context.data[0].subItemsData.subItems);
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    getData();
  });

  return (
    <div className="main-wrapper">
      {/* <h2>Men's Club</h2> */}
      <div className="product-wrapper">
        {products.map((e, i) => {
          return (
            <>
              <div className="card" style={{ width: "18rem" }} key={i}>
                <div className="iamge-box">
                  <img className="card-img-top" src={e.image} alt={e.name} />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{e.name}</h5>
                  <p className="card-text">&#x20B9;&nbsp;{e.price}</p>
                  <p className="card-text">{e.description}</p>
                  <p className="card-button">
                    <button type="button" className="btn btn-outline-warning" onClick={()=>{
                      context.cart.push(e)
                      context.setCartValue(context.cart.length)
                    }}>
                      Add to cart
                    </button>
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Cloths;
