import React from 'react';
import './Home.css';
import { headerItems, products } from '../../utils/ProductsData';
import Banner1 from '../../BannerImages/Banner1.jpg';
import Banner2 from '../../BannerImages/Banner2.jpg';
import Banner3 from '../../BannerImages/Banner3.jpg';
import Banner4 from '../../BannerImages/Banner4.jpg';
import Banner5 from '../../BannerImages/Banner5.jpg';
import Banner6 from '../../BannerImages/Banner6.jpg';
import Slider from '../../components/Slider/Slider';
import Products from '../../components/Products/Products';
import BackToTop from '../../components/BackToTop/BackToTop';

const Home = () => {

    const bannerImages = [ Banner1, Banner2,  Banner3, Banner4,  Banner5, Banner6 ]
    
    return (
        <div>
            <div className="item-container">
                {headerItems && headerItems.map((item, index) => <p>{item}</p> )}
            </div>
            <div className="home">
                <div className="home-container">
                    <Slider images={ bannerImages}/>
               
                    <div className="home-row">
                        {products.slice(0, 2).map((item) => {
                            return(
                            <Products
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                                image={item.image}
                                specification={item.specification}
                                detail={item.detail}
                            />
                            )
                        } )}
                    </div>
                    <div className="home-row">
                        {products.slice(2, 5).map((item) => {
                            return(
                            <Products
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                                image={item.image}
                                specification={item.specification}
                                detail={item.detail}
                            />
                            )
                        } )}
                    </div>
                    <div className="home-row">
                        {products.slice(5, 6).map((item) => {
                            return(
                            <Products
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                                image={item.image}
                                specification={item.specification}
                                detail={item.detail}
                            />
                            )
                        })}
                         
                    </div>
                   
                </div>
               
            </div>
             <BackToTop />  
                    
        </div>
        
    )
}

export default Home
