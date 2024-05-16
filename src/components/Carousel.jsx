import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
    const [index,setIndex]=useState(0)
    const nextSlide =()=>{
        setIndex((prevIndex)=>(prevIndex===images.length-1?0:prevIndex+1))
    }
    const prevSlide =()=>{
        setIndex((prevIndex)=>(prevIndex===0?images.length-1:prevIndex-1))
    }
    return(
        <div className="carousel">
            <div className='arrow' onClick={prevSlide}>
            <ArrowBackIosIcon/>
            </div>
            <div className="face-container"  style={{backgroundImage:`url(${images[index].img})`}}>
                <h1>{images[index].title}</h1>
                <p>{images[index].subtitle}</p>

            </div>
            <div className='arrow' onClick={nextSlide}>
            <ArrowForwardIosIcon/>
            </div>
        </div>
    )   
}

export default Carousel;