import React from "react";
import './ManufacturingCenter.css';
import Navbarr from "../Navbarr/Navbarr";
import Footer from "../Footer/Footer";

function ManufacturingCenter() {
  return (
   <div>
  
     <div className="manufacturing-container">
      <hr className="manufacturing-divider" />
      <h1 className="manufacturing-heading">Our Manufacturing Center</h1>

      <div className="location-section">
        <h1 className="location-heading">Our Location</h1>
        <p className="location-description">We are located at:</p>
        <address className="location-address">
          1234 Evergreen Lane,
          <br />
          Faizabad, Uttar Pradesh, India.
          <br />
          <a
            href="https://g.co/kgs/qwHGAWo"
            target="_blank"
            rel="noopener noreferrer"
            className="location-link"
          >
            View on Google Maps
          </a>
        </address>
      </div>
    </div>
   
   </div>
  );
}

export default ManufacturingCenter;
