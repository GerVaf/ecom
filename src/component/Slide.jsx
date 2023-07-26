import React from "react";
// import css from "./"
import "./Slide.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

//import Swiper style
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
//data
import { SliderProducts } from "../data/products";

const Slide = () => {
  return (
    <>
      <div className="s-container">
        <Swiper
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={50}
          loop={true}
          className="swiper"
          modules={[Pagination,Navigation]}
          navigation={true}
          loopFillGroupWithBlank={true}
        >

            {SliderProducts.map(i =>(
                <SwiperSlide className="swiper-slide">
                    <div className="left-side">
                        <div className="title">
                            <span>{i.name}</span>
                            <p>{i.detail}</p>
                        </div>
                        <span>{i.price}$</span>
                        <button>Shop Now</button>
                    </div>
                    <img src={i.img} alt="" />
                </SwiperSlide>
            ))}

        </Swiper>
      </div>
    </>
  );
};

export default Slide;
