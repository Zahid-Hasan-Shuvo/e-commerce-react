import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import { deleteShoppingCart, removeFromDb } from "../../assets/utilities/fakedb";
 import './Orders.css'
const Orders = () => {
  const cart = useLoaderData();
  // console.log(products);
  const [cart1, setCart1] = useState(cart);

  const handleRemoveFromCart = (id) => {
    const remaining = cart1.filter((product) => product.id !== id);
    setCart1(remaining);
    removeFromDb(id);
  };


const handleClearCart =()=>{
    setCart1([])
    deleteShoppingCart()
    console.log(handleClearCart);
}

  return (
    <div className="shop-container">
      <div className="review-container">
        {cart1.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleRemoveFromCart={handleRemoveFromCart}
          ></ReviewItem>
        ))}
      </div>

      <div className="cart-container">
        <Cart 
        cart={cart1}
        handleClearCart={handleClearCart}
     
        >
<Link   to="/checkout">
<button className="proceed-checkout">Proceed Checkout</button>

</Link>

        </Cart>
      </div>
    </div>
  );
};

export default Orders;
