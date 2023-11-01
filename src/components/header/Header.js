import React, { useState } from 'react'
import './header.css'

function Header({ getSearch, getSearchTerm }) {

    const [searchTerm, setSearchTerm] = useState();

    const searched = () => {
        getSearch("hello")
        getSearchTerm(searchTerm)
    }


    return (
        <div className='header'>
            <img className="header__icon" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon.com" />


            <div className="header__search-bar">
                <input className="header__search-bar--input" type="text" placeholder='Search Amazon' onChange={(e) => setSearchTerm(e.target.value)} />
                <button className='header__searchIcon' onClick={searched}><i class="fa fa-search" aria-hidden="true"></i></button>
            </div>

            <div className="header__option">
                <span className="header__optionLineOne">Select your</span>
                <span className="header__optionLineTwo">Address </span>
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello user</span>
                    <span className="header__optionLineTwo">Sign in</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">Return</span>
                    <span className="header__optionLineTwo">& Order</span>
                </div>


                <div className="header__optionBasket">
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                    <span className="header__optionLineTwo header__basketCount">3</span>
                </div>
            </div>
        </div>
    )
}

export default Header