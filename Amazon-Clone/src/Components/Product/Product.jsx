// import React, { useState } from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import classes from './Product.module.css'
import ProductCard from './ProductCard'
import Loder from '../Loder/Loder'

function Product() {
    const [products, setProducts] = useState([]);  // Initialize with an empty array
 const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                setIsLoading(false)
                setProducts(res.data);
            })
            .catch((err) => {
                setIsLoading(false)
                console.error('Error fetching products:', err);
            });
    }, []);  // Empty dependency array to run only once

    return (
        <>
        {

            }
        {isLoading?(<Loder />):(<section className={classes.products_container}>
        {
        // products.length > 0 ? (
            products.map((singleProduct) => (
                
                <ProductCard key={singleProduct.id} product={singleProduct} />
            ))
        // )
        //  : (
        //     <p>Loading products...</p>  // Optional: You can show loading state while fetching
        // )
        }
    </section>)
        }
        
        
        </>
      
    );
}

export default Product;


