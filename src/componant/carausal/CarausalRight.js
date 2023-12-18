import React from "react"
import { useState,useEffect } from 'react'
import { ReactComponent as RightArrow } from "../../assest/RightArrow.svg"
import { useSwiper } from 'swiper/react'
import "./CarausalRight.css"

const CarausalRight = () => {
    const swiper = useSwiper();
    const [isEnd,setIsEnd] = useState(swiper.isEnd)

    useEffect(() => {
        swiper.on("slideChange", () => {
            setIsEnd(swiper.isEnd)
        })
    })
  return (
    <div className="RightNev">
        {!isEnd && <RightArrow onClick={() => swiper.slideNext()}/>}
    </div>
  )
}

export default CarausalRight