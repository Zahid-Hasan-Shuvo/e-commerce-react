import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  // console.log(cart);
  let total = 0;
  for (const product of cart) {
    total = total + product.price;
 
    // console.log(product);
  }
 
  return (
    <div className="cart-summary">
      <h2>Order Summary</h2>
      <p>Selected Items :{cart.length}</p>
      <p>Total Price:{total} </p>
      <p>Total Shipping: {}</p>
      <p>Tax: {}</p>
      <h5>Grand Total :{}</h5>
    </div>
  );
};

export default Cart;
