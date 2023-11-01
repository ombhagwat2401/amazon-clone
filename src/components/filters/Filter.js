import React from 'react'
import './filter.css'

function Filter() {
    return (
        <div className='filter'>
            <div className="rating">
                <p className='filter__header'>Customer Review</p>
                <div className="start_container">
                    <i class="fa fa-star filled" aria-hidden="true"></i>
                    <i class="fa fa-star filled" aria-hidden="true"></i>
                    <i class="fa fa-star filled" aria-hidden="true"></i>
                    <i class="fa fa-star filled" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    &up
                </div>

                <div className="start_container">
                    <i class="fa fa-star filled" aria-hidden="true"></i>
                    <i class="fa fa-star filled" aria-hidden="true"></i>
                    <i class="fa fa-star filled" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    &up
                </div>

                <div className="start_container">
                    <i class="fa fa-star filled" aria-hidden="true"></i>
                    <i class="fa fa-star filled" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    &up
                </div>

                <div className="start_container">
                    <i class="fa fa-star filled" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    &up
                </div>

            </div>

            <div className="price">
                <p className='filter__header'>Price</p>
                <p>Under ₹750</p>
                <p>₹750 - ₹1,250</p>
                <p>₹1,250 - ₹2,000</p>
                <p>₹2,000 - ₹3,000</p>
                <p>Over ₹3,000</p>
            </div>
        </div>
    )
}

export default Filter