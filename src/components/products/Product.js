import React from 'react'
import './product.css'

function Product({ name, price, rating, img }) {

    let stars = '';
    for (var i = 0; i < Math.ceil(rating.rate); i++) {
        stars = stars + '⭐';
    }
    return (
        <div className='products'>
            <img src={img} alt="" />
            <div className="cont">
                <p className='name'>{name.substr(0, 25)}</p>
                <p className="price"><sup>&#8377;</sup> {price}</p>
                <p className="rating">{rating.rate} {stars} ({rating.count})
                </p>
                <button className="add_to_cart">Add to cart</button>
            </div>
        </div>
    )
}

export default Product