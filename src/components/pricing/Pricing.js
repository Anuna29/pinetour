import React from 'react'
import './Pricing.css'

export const Pricing = () => {
  return (
    <div id="pricing-container">
      <div id="subtitle">PRICING</div>
      <div id="pricing-title">Pricing of
      Our Agency</div>
      <div id="pricing-cards">
        <div className='card'>
          <span id="card-title">Starter Pack</span>
          <ul>
            <li>Trip</li>
            <li>Hotel</li>
            <li>Breakfast</li>
            <li>Dinner</li>
          </ul>
          <span id='card-price'>2100$</span>
        </div>
        <div className='card'>
        <span id="card-title">Luxury pack</span>
          <ul>
            <li>Starter pack</li>
            <li>Flights</li>
            <li>Cruise trip</li>
            <li>Cruise trip</li>
          </ul>
          <span id='card-price'>4200$</span>
        </div>
      </div>
    </div>
  )
}
