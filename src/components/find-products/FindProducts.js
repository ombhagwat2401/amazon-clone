import React, { useState } from 'react'
import './findProducts.css'
import Filter from '../filters/Filter'
import Product from '../products/Product'

function FindProducts({ setProducts }) {

    const [getProduct, setGetProduct] = useState(setProducts)

    console.log(setProducts);
    return (
        <div className='find__products'>
            <Filter />
            <div className='all__products'>
                {
                    setProducts.map((e) => {
                        return (
                            <Product
                                name={e.title}
                                price={e.price}
                                rating={e.rating}
                                img={e.image}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FindProducts