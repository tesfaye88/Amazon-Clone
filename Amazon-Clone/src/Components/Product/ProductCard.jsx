import React from 'react'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import classes from './Product.module.css'
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
// import Product from './Product';
// or
// import { Rating } from '@mui/material';


function ProductCard({ product,flex,renderDes}) {
    const { image, title, id, rating, price,description } = product  ;
    console.log(product)

    return (
        <div >
            <div className={`${classes.card_container} ${flex? classes.product_fixed:''}`} >
            <Link to={`/products/${id}`}>
                <img src={image} alt=''className='{classes.img_container}' />
            </Link>
            <div>

                <span>{title}</span>
                {renderDes && <div style={{maxWidth:"760px"}}>{description}</div> }
                <div className={classes.rating}>
                    <Rating value={Rating.rate} precision={0.1} />
                     <small>{Rating.count}</small>
                </div>
                <div>
                    {/* price */}
                     <CurrencyFormat amount={price} />
                </div>
                <button className={classes.button}>
                    Add to cart
                </button>
            </div>
            </div>
        </div>
    );
}

export default ProductCard;

