import React, { useState, useEffect } from 'react'
import ProductCate from '../product-cate/ProductCate';
import Product from '../products/Product';
import './home.css'



function Home({ setProducts }) {

    console.log(setProducts);

    const [ind, setInd] = useState(0);
    useEffect(() => {
        setInterval(() => {
            rightShift();
        }, 10000);
    }, [])




    const images = ["back_img1.jpg", "back_img2.jpg", "back_img3.jpg", "back_img4.jpg"];
    const img = images[ind];

    const leftShift = () => {
        if (ind <= 0) {
            setInd(images.length - 1)
        } else {
            setInd(ind - 1)
        }
    }

    const rightShift = () => {
        if (ind >= images.length - 1) {
            setInd(0)
        } else {
            setInd(ind + 1)
        }
    }


    return (
        <div className='home'>
            <div className="home__container">
                <div className="back-controler">
                    <button className='btns' onClick={leftShift}>{"<"}</button>
                    <button className='btns' onClick={rightShift}>{">"}</button>
                </div>

                <img src={img} alt="" className="home__image" />

                <div className="home__row">

                    <ProductCate
                        name="View All Womens wear"
                        img="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
                    />
                    <ProductCate 
                        name="Jewellery at 30% OFF"
                        img="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
                    />
                    <ProductCate 
                        name="50 Plus Mens wear categories"
                        img="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
                    />
                    <ProductCate 
                        name="30% OFF on First Womens wear buy"
                        img="https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg"
                    />
                </div>

                <div className="home__row">
                    <ProductCate
                        name="20% OFF on Monitors"
                        img="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"
                    />
                    <ProductCate
                        name="Get 60% OFF on all Electronic Gadgets"
                        img="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
                    />
                </div>

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


        </div>
    )
}

export default Home