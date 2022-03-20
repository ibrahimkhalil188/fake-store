import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct/SingleProduct';
import './Product.css'

const Product = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='grid'>
            {
                products.map(product => < SingleProduct product={product} key={product.id}></SingleProduct>)
            }
        </div >
    );
};

export default Product;