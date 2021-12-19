import React, { useState, useEffect } from 'react';
import './Slider.css';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';


const Slider = ({ images }) => {

    const [index, setIndex] = useState(0);

    // change on state when user clicks on arrows
    useEffect(() => {
        const lastindex = images.length - 1;

        if (index < 0) {
            setIndex(lastindex)
        }
        if (index > lastindex) {
            setIndex(0)
        }

    }, [index, images]);

    // change in state when user doesn't click on arrows 
    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1) 
        }, 5000)
        
        return () => { clearInterval(slider)}

     }, [index])

    return (
        <div className="section">
            <div className="section-center">
                {images.map((image, indexImage) => {
                    let position = "next-slide";
                    if (indexImage === index) {
                        position = "active-slide"
                    }
                    if (indexImage === index - 1 || (index === 0 && indexImage === images.length - 1)) {
                        position = "last-slide"
                    }

                    return (
                        <article className={position} key={indexImage}>
                            <img src={ image } alt="banner-img" className="banner-img" />
                        </article>
                    )
                })}
                <span className="prev" onClick={() => { setIndex(index - 1) }}>
                    <ArrowBackIos />
                </span>
                <span className="next" onClick={() => { setIndex(index + 1) }}>
                    <ArrowForwardIos />
                </span>
            </div>

        </div>
    )
}

export default Slider
