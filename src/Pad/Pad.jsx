/* eslint-disable no-unused-vars */
import React from "react";
import "./Pad.css";
import Pad1 from "../Images/pad1.jpg";
import Pad2 from "../Images/pad2.jpg";
import Pad3 from "../Images/pad3.jpg";
import Pad4 from "../Images/pad4.jpg";
import { Link } from "react-router-dom";

function Pad() {
  return (
    <div className="pad-container">
      <h1 className="pad-heading"> Pads Collecttion</h1>
      <div className="pad-section">
        <div>
          
          <ul>
            <li>
              Super absorbent technology for exceptional performance, keeping
              you dry and comfortable throughout the day and night, no matter
              the flow.
            </li>
            <li>
              Soft, breathable material that provides unparalleled comfort,
              allowing your skin to stay irritation-free and fresh.
            </li>
            <li>
              Flexible and secure fit, designed to stay in place, even during
              your most active moments, ensuring leak protection.
            </li>
          </ul>
        </div>
        <div>
             
          <ul>
            <li>
              Leak-proof barriers for all-day confidence, letting you focus on
              your day without worrying about mishaps.
            </li>
            <li>
              Hypoallergenic and skin-friendly, made with care to prevent
              irritation and provide a gentle feel for sensitive skin.
            </li>
            <li>
              Available in a variety of sizes and styles to suit all needs, from
              light to heavy flow, ensuring the perfect solution for every
              occasion.
            </li>
          </ul>
        </div>
      </div>

      <div className="pad-grid">
        <div className="pad-card">
          <Link to="/pads" ><img src={Pad1} alt="Pad 1" className="pad-image" /></Link>
          <div className="pad-description">Soft and Comfortable Pad</div>
        </div>
        <div className="pad-card">
        <Link to="/pads" ><img src={Pad2} alt="Pad 1" className="pad-image" /></Link>
          <div className="pad-description">Ultra-Absorbent Pad</div>
        </div>
        <div className="pad-card">
        <Link to="/pads" ><img src={Pad3} alt="Pad 1" className="pad-image" /></Link>
          <div className="pad-description">Eco-Friendly Pad</div>
        </div>
        <div className="pad-card">
        <Link to="/pads" ><img src={Pad4} alt="Pad 1" className="pad-image" /></Link>
          <div className="pad-description">Super-Thin Comfort Pad</div>
        </div>
      </div>
    </div>
  );
}

export default Pad;
