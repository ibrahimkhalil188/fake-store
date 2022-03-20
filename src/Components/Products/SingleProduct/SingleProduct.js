import React from 'react';
import ReactModal from '../../ReactModal';
import './SingleProduct.css'
const SingleProduct = (props) => {
    const { title, image, price } = props.product;
    return (
        <div className='container'>
            <div className='card'>
                <img src={image} alt="" />
                <h2>{title.slice(1, 30) + " ..."}</h2>
                <h3 style={{ color: "coral" }}>Price: {price}$</h3>
                <div className="button">
                    <button onClick={props.handleCount} className='btn btn-success'>Add to Cart</button>
                    <ReactModal product={props.product}></ReactModal>
                    <button className='btn btn-danger'>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;