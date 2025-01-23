/* eslint-disable no-unused-vars */
import React from "react";
import "./Diper.css";
import diperd2 from "../Images/b2.jpg";
import diperd4 from "../Images/b4.jpg";
import diperd5 from "../Images/b5.jpg";
import { Link } from "react-router-dom";

function Diper() {
  return (
    <div className="diper-container">
      <h1>baby Diaper Section</h1>
      <div className="diper-section">
        <div>
          <ul>
            <li>
              Super absorbent core for long-lasting protection, ensuring dryness
              and comfort throughout the day and night, even during active
              playtime.
            </li>
            <li>
              Soft, breathable material that provides ultimate comfort, allowing
              your baby's skin to breathe and stay irritation-free.
            </li>
            <li>
              Flexible waistband for a secure fit, designed to move with your
              baby and prevent leaks, even during their most active moments.
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              Leak-proof design for all-day wear, giving parents peace of mind
              while ensuring the baby stays happy and dry.
            </li>
            <li>
              Hypoallergenic and gentle on sensitive skin, crafted with care to
              prevent rashes and provide unmatched softness.
            </li>
            <li>
              Available in multiple sizes for all ages, ensuring the perfect fit
              for every baby, from newborns to toddlers, as they grow.
            </li>
          </ul>
        </div>
      </div>

      <div className="diper-image-container">
        <div className="diper-item">
          <Link to="/babydiper" ><img src={diperd2} alt="Diper 2" className="diper-image diper-image-1 " /></Link>
          <div className="diper-text">
            <h3>Baby Diper Single Pack</h3>
          </div>
        </div>
        <div className="diper-item">
        <Link to="/babydiper" ><img src={diperd2} alt="Diper 2" className="diper-image diper-image-1 " /></Link>
          <div className="diper-text">
            <h3>Baby Diper Jumbo Pack</h3>
          </div>
        </div>
        <div className="diper-item">
        <Link to="/babydiper" ><img src={diperd2} alt="Diper 2" className="diper-image diper-image-1 " /></Link>
          <div className="diper-text">
            <h3>Baby Diper Normal Pack</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Diper;
