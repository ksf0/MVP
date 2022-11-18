import { CCarousel, CCarouselItem, CImage } from '@coreui/react'
import { useState, useEffect } from 'react'
import './App.scss'
import '@coreui/coreui/dist/css/coreui.min.css'

export default function PlacesInfoBox({ info }) {
  return (
    <>
      <CCarousel controls>
        {info.info.photos.map((currPhoto, index) => (
          <CCarouselItem>
            <CImage
              className="d-block w-100"
              src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${
                currPhoto.photo_reference
              }&key=${import.meta.env.VITE_API_KEY}`}
              alt={`slide ${index}`}
            />
          </CCarouselItem>
        ))}
      </CCarousel>
      <div>{info.data.name}</div>
      <img className="res-icon" src={info.data.icon}></img>
      <p>Open Now: {info.data.opening_hours.open_now ? '✅' : '❌'}</p>
      <p>Rating: {info.data.rating}</p>
    </>
  )
}
