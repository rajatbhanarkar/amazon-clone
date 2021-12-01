import React from 'react';
import './Product.css';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarIcon from '@material-ui/icons/Star';
import {Button} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocalMallIcon from '@material-ui/icons/LocalMall';

function Product({name, price, image, rating}) {
    var full = rating/10;
    var half = (rating%10==0)?(0):(1);
    var blank = 5-full-blank;
    console.log(blank);

    return (
        <div className="product">
            <div className="product_info">
                <h4>{name}</h4>
                <p>₹{price}</p>
            </div>
            <div className="product_rating">
                <StarIcon/> <StarIcon/> <StarIcon/> <StarHalfIcon/> <StarBorderIcon/>
            </div>
            <img src={image} alt=""/>

            <div className="product_actions">
                <Button className="product_add_button"><ShoppingCartIcon/>&nbsp;Add to cart</Button>
                <Button className="product_buy_button"><LocalMallIcon/>&nbsp; Buy now</Button>
            </div>
        </div>
    )
}

export default Product;
