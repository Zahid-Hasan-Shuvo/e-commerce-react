
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Product.css'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'



const Product = (props) => {
    const {img, name, seller, price, ratings} = props.product;
    const handleAddToCart =props.handleAddToCart;
    // console.log(props.product);
    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className='product-info'>
           <h6 className='product-name'>{name}</h6>
            <p>Price: ${price}</p>
            <p> Manufacture:{seller}</p>
            <p>Rating:{ratings}star</p>
           </div>
           <button onClick={()=> handleAddToCart(props.product)} className='addTo-cart'>Add to Cart <FontAwesomeIcon icon={faCartShopping} /></button>
        </div>
    );
};

export default Product;