import React from 'react'
import { Swiper,SwiperSlide } from 'swiper/react'
import img from '../../assets/testimonialHero.png'
import { TestimonialsData } from '../../data/testimonials'

import "./Testimonals.css"
const Testimonials = () => {
  return (
    <>
    
        <div className='top '>
            <div className='one'>
                <h2>TOP RATED</h2>
                <span> SEEDLY SAY HAS SUITABLE AND BOI,ECERICE JOY MAN CHILDREN REJOICED</span>
            </div>
            
            <img className='two' src={img} width="250px" alt="" />

            <div className='three'>
                <h2>100K</h2>
                <span>HAPPY CUSTOMERS WITH US</span>
            </div>

            
        </div>
        <h2 className='review'>REVIEWS</h2>
        <div className="testimonal">
            <Swiper
            slidesPerView={3}
            slidesPerGroup={1}
            spaceBetween={20}
            className="card"
            >
               {TestimonialsData.map((tes)=>{
                return (
                        <SwiperSlide>
                            <div className='testimonals'>
                            <img src={tes.image} alt="" />
                            <span>{tes.comment}</span>
                            <hr/>
                            <p>{tes.name}</p>
                            </div>
                        </SwiperSlide>
                )
            })} 
            </Swiper>
        </div>

    </>
  )
}

export default Testimonials