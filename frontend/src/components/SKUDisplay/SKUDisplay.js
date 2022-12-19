import React from 'react';
import { Link } from 'react-router-dom';
import Ratings from '../Ratings/Ratings';

const SKUDisplay = (props) => {
    return (
        <div className="sku-card">
            <div className="sku-img">
                <Link to={`product/${props.id}`}>
                    <img src={`/images/products/${props.id}/${props.imagePreview}`} alt={`${props.name}`} />
                </Link>
            </div>
            <h5 className="sku-name py-2">
                <Link to={`product/${props.id}`}>
                    {props.name}
                </Link>
            </h5>
            <div className="d-flex align-items-center justify-content-between">
                <div className="list-price-reviews">
                    <del>{props.listPrice}</del>
                    <Ratings ratings={props.ratings} numOfReview={props.numOfReviews} variant="primary" />
                </div>
                <p className="display-price">{props.price}</p>
            </div>
        </div>
    );
}
 
export default SKUDisplay;