import React, { useEffect } from "react";
import { Navigation } from "swiper";

import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/bundle';

import CarausalLeft from "./CarausalLeft";
import CarausalRight from "./CarausalRight";
import { Swiper, SwiperSlide} from "swiper/react";
import { useSwiper } from "swiper/react";






const Controls = ({ data }) => {
	const { swiper } = useSwiper();

	useEffect(() => {
		swiper?.slideTo(0);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);

	return <></>;
};
    
    const Carausaldata = ({data,renderComponant}) => {
      return (
        <div className="wrapper">
            <Swiper 
            initialSlide={0}
            modules={{ Navigation }}
            slidesPerView={"auto"}
            spaceBetween={40}
            allowTouchMove
            
          >
              {data.map((ele) => (
                    <SwiperSlide key={ele.id}>{renderComponant(ele)}</SwiperSlide>
                ))}
         
            
                
                <Controls data={data} />
                <CarausalLeft />
                <CarausalRight />
            
              
            </Swiper>
        </div>
      )
    }

    
 export default Carausaldata 