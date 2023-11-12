import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../assets/utilities/fakedb';

const Orders = () => {
    const cart= useLoaderData()
    // console.log(products);
    const [cart1, setCart1]=useState(cart)

    const handleRemoveFromCart=(id)=>{
const remaining= cart1.filter(product=>product.id !== id)
setCart1(remaining)
removeFromDb(id)
    }
    return (
        <div className='shop-container'>

     <div className='review-container'>
{
    cart1.map(product=> <ReviewItem key={product.id} product={product} handleRemoveFromCart={handleRemoveFromCart}></ReviewItem>)
}
     </div>

     <div className='cart-container'>
<Cart cart={cart1}></Cart>
     </div>

        </div>
    );
};

export default Orders;