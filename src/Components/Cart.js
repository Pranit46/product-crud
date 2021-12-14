import React, { useContext, useState } from "react";
import { itemsContext } from "../App";

function Cloths() {
  let context = useContext(itemsContext);
  let [cartPrice] = useState(0);

  let handleRemove = (e) => {
    context.cart.splice(context.cart.indexOf(e), 1);
    context.setCartValue(context.cart.length);
  };
  return (
    <div className="main-cart-wrapper">
      {context.cart.length ? (
        <>
          <h2 className="shopping-cart-text">Shopping Cart</h2>
          <div className="product-cart-wrapper">
            {context.cart.map((e, i) => {
              cartPrice += Number(e.price);
              return (
                <>
                  <div className="cart-card" key="{i}">
                    <div className="image-info">
                      <div className="iamge-box-cart">
                        <img alt={e.name}
                          className="card-img-top"
                          src={e.image}
                        />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">{e.name}</h5>
                        <p className="card-text">&#x20B9;&nbsp;{e.price}</p>
                        <p className="card-text">
                          {e.description}
                        </p>
                        <button className="btn btn-danger btn-sm" onClick={() => {handleRemove(e)}}>Remove</button>
                      </div>
                      
                    </div>
                  </div>
                  <hr className="row"/>
                </>
              );
            })}
            <div className="price-wrapper">
              <div className="price-label">Total Amount</div>
              <div className="price-amount">&#x20B9;&nbsp;{cartPrice}</div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="empty-cart">
            <h3>Your cart is empty</h3>
            <img alt="empty-cart" src="https://thumbs.dreamstime.com/b/happy-asian-businessman-empty-shopping-cart-cartoon-illustration-151640371.jpg"></img>
          </div>
        </>
      )}
    </div>
  );
}

export default Cloths;
