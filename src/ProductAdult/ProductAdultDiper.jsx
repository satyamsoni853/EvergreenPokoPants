import React from "react";

import AdultDiperImage1 from "../ProductImage/AdultDiper2.png";
import AdultDiperImage2 from "../ProductImage/Adultimage.jpg";

function ProductAdultDiper() {
  return (
    <div>
      <div id="header">
        <h1>Our Adult Diaper Section </h1>
      </div>
      <div className="container">
        <div className="card">
          <div className="card-image">
            <img src={AdultDiperImage1} />
          </div>
          <div className="card-text">
            {/* <p className="card-meal-type">Small Diper</p> */}
            <h2 className="card-title">Big Pack Diper</h2>
            <p className="card-body">
              A Pack Of 40 Diper(Avvailable In Diffrent Size)
            </p>
            <button
              className="Buy-Now-Btn"
              onClick={() =>
                (window.location.href =
                  "https://wa.me/+917007512418?text=" +
                  encodeURIComponent("Hello"))
              }
            >
              Buy Now
            </button>
          </div>
          <div className="card-price">₹399</div>
        </div>

        <div className="card">
          <div className="card-image">
            <img src={AdultDiperImage2} />
          </div>
          <div className="card-text">
            {/* <p className="card-meal-type">Small Diper</p> */}
            <h2 className="card-title">Big Pack Diper</h2>
            <p className="card-body">
              A Pack Of 40 Diper(Avvailable In Diffrent Size)
            </p>
            <button
              className="Buy-Now-Btn"
              onClick={() =>
                (window.location.href =
                  "https://wa.me/+917007512418?text=" +
                  encodeURIComponent("Hello"))
              }
            >
              Buy Now
            </button>
          </div>
          <div className="card-price">₹399</div>
        </div>
      </div>
    </div>
  );
}

export default ProductAdultDiper;
