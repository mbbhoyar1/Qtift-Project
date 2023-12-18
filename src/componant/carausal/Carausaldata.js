import React, { useEffect } from "react";
import { Navigation } from "swiper";
import "swiper/css";
import "./Carausaldata.css";

import CarausalLeft from "./CarausalLeft";
import CarausalRight from "./CarausalRight";
import { Swiper, SwiperSlide} from "swiper/react";
import { useSwiper } from "swiper/react";





    const Controls = ({data}) => {
        let swiper = useSwiper();
        console.log(swiper)
        useEffect(() => {
            // swiper.slideTo(0)
        },[data])
    
        return <></>
    }
    
    const Carausaldata = ({data,renderComponant}) => {
      return (
        <div className="wrapper">
            <Swiper initialSlide = {0} modules={{Navigation}} slidesPerView={'auto'} spaceBetween={40} allowTouchMove>
                <Controls data={data} />
                <CarausalLeft />
                <CarausalRight />
                {data.map(ele => (
                    <SwiperSlide>{renderComponant(ele)}</SwiperSlide>
                ))}
            </Swiper>
        </div>
      )
    }

    
 export default Carausaldata 