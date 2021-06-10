import React from 'react'
import SwiperCore, { Navigation, Scrollbar } from 'swiper'
import 'swiper/swiper-bundle.css'
import './ImgSlider.css'
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Navigation, Scrollbar]);

function ImgSlider( props ) {
  const sliderImgs = []

  for ( var i = 0; i < props.urls.length; i = i + 1 ) {
    sliderImgs.push(<SwiperSlide key={i}><img className="slider-img" src={props.urls[i]}></img></SwiperSlide>)
  }

  return (
    <>
      <Swiper
          spaceBetween={0} 
          slidesPerView={1} 
          navigation  
          scrollbar={{ draggable: true }} 
        >
          {sliderImgs}
      </Swiper>
    </>
  )
}

export default ImgSlider
