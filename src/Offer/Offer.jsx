/* eslint-disable no-unused-vars */
import React from 'react'
import './Offer.css'
import Offer1 from '../Images/offer1.jpg'
import Offer2 from '../Images/offer2.jpg'
import Offer3 from '../Images/offer3.jpg'
import Offer4 from '../Images/offer4.jpg'

function Offer() {
  return (
    <div className="offer-container">
    <h1 className="offer-heading">Amazing Offers Just For You!</h1>
    <div className="offer-flex">
      <div className="offer-card">
        <img src={Offer1} alt="Offer 1" className="offer-image" />
        <div className="offer-description">50% Off on Your First Purchase</div>
      </div>
      <div className="offer-card">
        <img src={Offer2} alt="Offer 2" className="offer-image" />
        <div className="offer-description">Buy One Get One Free</div>
      </div>
      <div className="offer-card">
        <img src={Offer3} alt="Offer 3" className="offer-image" />
        <div className="offer-description">Free Shipping on Orders Above ₹999</div>
      </div>
      <div className="offer-card">
        <img src={Offer4} alt="Offer 4" className="offer-image" />
        <div className="offer-description">Limited Time Discount on Selected Products</div>
      </div>
    </div>
  </div>
  )
}

export default Offer