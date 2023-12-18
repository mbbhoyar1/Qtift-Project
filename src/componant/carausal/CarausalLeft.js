import React from "react";
import { useEffect, useState } from "react";
import "./CarausalLeft.css"
import {useSwiper} from 'swiper/react';
import { ReactComponent as LeftArrow } from "../../assest/LeftArrow.svg";


function CarausalLeft(){

    const swiper = useSwiper();
    const [isBeginning,setIsBeginning] = useState(swiper.isBeginning)

    useEffect(() => {
        swiper.on("slideChange", () => {
            setIsBeginning(swiper.isBeginning)
        })
    },[swiper])
  return (
    <div className="leftNev">
        {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()}/>}
    </div>
  )
}

export default CarausalLeft




