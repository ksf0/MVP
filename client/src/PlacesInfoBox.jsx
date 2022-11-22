import { CCarousel, CCarouselItem, CImage } from '@coreui/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useState, useEffect } from 'react'
import './App.scss'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function PlacesInfoBox({ info, swiper, setSwiper }) {
  return (
    <>
      <div className="carousel-container">
        <Swiper
          // install Swiper modules
          onSwiper={setSwiper}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          initialSlide={0}
        >
          {info.info.photos.map((currPhoto, index) => (
            <SwiperSlide>
              <div className="img-carousel-container">
                <img
                  className="img-carousel-item"
                  src={`https://maps.googleapis.com/maps/api/place/photo?maxheight=1000&photoreference=${
                    currPhoto.photo_reference
                  }&key=${import.meta.env.VITE_API_KEY}`}
                  alt={`slide ${index}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>{info.data.name}</div>
      <img className="res-icon" src={info.data.icon}></img>
      <p className="hours">
        {info.info.opening_hours.weekday_text.map((current) => (
          <div>{current}</div>
        ))}
      </p>
      <p>Open Now: {info.data.opening_hours.open_now ? '✅' : '❌'}</p>
      <p>Rating: {info.data.rating}</p>
      <p>Delivery: {info.info.delivery ? '✅' : '❌'}</p>
      <div>
        <a target="_blank" href={info.info.website}>
          {'Website'}
        </a>
      </div>
      <a
        target="_blank"
        href={`https://www.google.com/maps/dir/?api=1&destination=${info.info.formatted_address}`}
      >
        {info.info.formatted_address}
      </a>
    </>
  )
}
