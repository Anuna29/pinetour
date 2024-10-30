import React from 'react'
import "./Destination.css"
import { destinations } from './Data'

export const Destination = () => {
  return (
    <div id='destination-container'>
      <div id='destination-left'>
        <div id='destination-subtitle'>Tours | 6 DAYS</div>
        <div id='destination-title'>Destination of
        Our Agency</div>
        <div id='destination-map'>
          {destinations.map((destination,index) => (
            <div id='destination-item-container'>
              <div id='destination-item-left'>D{destination.number}</div>
              <div id='destination-item-right'>
                <div id='destination-item-right-title'>{destination.title}</div>
                <div id='destination-item-right-location'>{destination.location}</div>
              </div>
              
              {index < destinations.length - 1 && <div id="stripe"></div>}
              
            </div>
          ))}
        </div>
      </div>
      <div id='destination-right'>
        <img src="images/image-5.png" alt="destination"/>
      </div>
    </div>
  )
}
