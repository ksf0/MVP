import { CCarousel, CCarouselItem, CImage } from '@coreui/react'
import { useState, useEffect } from 'react'
import './App.scss'
import '@coreui/coreui/dist/css/coreui.min.css'

export default function PlacesInfoBox({ info }) {
  console.log(info)

  useEffect(() => {
    console.log(info)
  }, [info])
  return (
    <>
      <div className="carousel-container">
        <CCarousel controls>
          {info.info.photos.map((currPhoto, index) => (
            <CCarouselItem>
              <CImage
                className="d-block w-100 slide"
                src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${
                  currPhoto.photo_reference
                }&key=${import.meta.env.VITE_API_KEY}`}
                alt={`slide ${index}`}
              />
            </CCarouselItem>
          ))}
        </CCarousel>
      </div>
      <div>{info.data.name}</div>
      <img className="res-icon" src={info.data.icon}></img>
      <p>Open Now: {info.data.opening_hours.open_now ? '✅' : '❌'}</p>
      <p>Rating: {info.data.rating}</p>
      <p>Delivery: {info.info.delivery ? '✅' : '❌'}</p>
      <a
        target="_blank"
        href={`https://www.google.com/maps/dir/?api=1&destination=${info.info.formatted_address}`}
      >
        {info.info.formatted_address}
      </a>
      <a target="_blank" href={info.info.website}>
        {info.info.website}
      </a>
      <p>
        {info.info.opening_hours.weekday_text.map((current) => (
          <div>{current}</div>
        ))}
      </p>
    </>
  )
}
