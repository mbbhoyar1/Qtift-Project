import React from "react";
import { useEffect, useState } from "react";
import "./CarausalLeft.css"
import {useSwiper} from 'swiper/react';
import { ReactComponent as LeftArrow } from "../../assest/LeftArrow.svg";


function CarausalLeft(){

    const swiper = useSwiper();
    const [isBegin,setIsBegin] = useState(true)

    useEffect(() => {
        swiper.on("slideChange", () => {
          setIsBegin(swiper.isBeginning)
        })
    },[swiper])
  return (
    <div className="leftNev">
        {!isBegin && <LeftArrow onClick={() => swiper.slidePrev()}/>}
    </div>
  )
}

export default CarausalLeft




