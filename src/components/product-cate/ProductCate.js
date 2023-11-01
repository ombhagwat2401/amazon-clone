import React from 'react'
import './productCate.css'

function ProductCate({ name, img }) {
    return (
        <div className='product'>
            <div className="product__info">
                <h3>{name}</h3>
            </div>

            <img src={img} alt="product image" />

            <a href='#'>see more</a>
        </div>
    )
}

export default ProductCate