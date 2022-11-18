import Carousel from 'react-bootstrap/Carousel'
import { useState, useEffect } from 'react'

export default function PlacesInfoBox({ info }) {
  console.log(info.info.photos)
  return (
    <div>
      <img
        src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${
          info.info.photos[0].photo_reference
        }&key=${import.meta.env.VITE_API_KEY}`}
      ></img>
      <div>{info.data.name}</div>
      <img className="res-icon" src={info.data.icon}></img>
      <p>Open Now: {info.data.opening_hours.open_now ? '✅' : '❌'}</p>
      <p>Rating: {info.data.rating}</p>
    </div>
  )
}

// place info not being access corectlyeteyltyew optaweingpawinwoap
