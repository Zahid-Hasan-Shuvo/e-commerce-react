import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowRightArrowLeft, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cart, handleClearCart, children }) => {
  // console.log(cart);
  let total = 0;
  let totalShipping = 0;
  let quantity =0;

  for (const product of cart) {
    if(product.quantity===0){
      product.quantity=1
    }
    total = total + product.price*product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
 
    // console.log(product);
  }
  const tax=(total*7)/100;
  const granTotal=total+totalShipping+tax;
 
  return (
    <div className="cart-summary">
      <h2>Order Summary</h2>
      <p>Selected Items :{quantity}</p>
      <p>Total Price: ${total} </p>
      <p>Total Shipping: ${totalShipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h5>Grand Total : ${granTotal.toFixed(2)}</h5>
      <button onClick={handleClearCart} className="btn-clear-cart">
       <span className="clear"> Clear cart </span>
        
        <span><FontAwesomeIcon  icon={faTrashAlt} /></span>
        
         </button>
      
        {children }
         
    </div>
  );
};

export default Cart;
