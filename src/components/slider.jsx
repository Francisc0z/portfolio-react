import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../styles/slider.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            alt=""
            src={`imagenes/digitalArt/${1}.jpg`}
            className="d-block"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt=""
            src={`imagenes/digitalArt/${2}.jpeg`}
            className="d-block"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt=""
            src={`imagenes/digitalArt/${3}.jpeg`}
            className="d-block"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt=""
            src={`imagenes/digitalArt/${4}.jpg`}
            className="d-block"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt=""
            src={`imagenes/digitalArt/${5}.jpg`}
            className="d-block"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt=""
            src={`imagenes/digitalArt/${6}.jpg`}
            className="d-block"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt=""
            src={`imagenes/digitalArt/${7}.jpeg`}
            className="d-block"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt=""
            src={`imagenes/digitalArt/${8}.jpeg`}
            className="d-block"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt=""
            src={`imagenes/digitalArt/${9}.jpeg`}
            className="d-block"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt=""
            src={`imagenes/digitalArt/${10}.jpg`}
            className="d-block"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt=""
            src={`imagenes/digitalArt/${11}.jpeg`}
            className="d-block"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt=""
            src={`imagenes/digitalArt/${12}.jpeg`}
            className="d-block"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
