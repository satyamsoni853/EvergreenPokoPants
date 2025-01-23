/* eslint-disable no-unused-vars */
import React from "react";
import Padsimage1 from './ProductPad1.jpg'
import Padsimage2 from './Productpad2.jpg'
import Padsimage3 from './Productpad3.jpg'
import Padsimage4 from './Productpad4.jpg'
import Padsimage5 from './Productpad5.jpg'
import Padsimage6 from './Productpadcombo.jpg'


function ProductPads() {
  return (
    <div>
      <div id="header">
        <h1>Our Pads Section in the Professional World</h1>
      </div>
      <div className="container">
        <div className="card">
          <div className="card-image">
            <img src={Padsimage1} />
          </div>
          <div className="card-text">
            {/* <p className="card-meal-type">Small Diper</p> */}
            <h2 className="card-title">Big Pack  Diper</h2>
            <p className="card-body">
            A Pack Of 6 Pads(Avvailable In Diffrent Size)
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
          <div className="card-price">₹36</div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src={Padsimage2} />
          </div>
          <div className="card-text">
            {/* <p className="card-meal-type">Small Diper</p> */}
            <h2 className="card-title">Small Pack Diper</h2>
            <p className="card-body">
            A Pack Of 6 Pads(Avvailable In Diffrent Size)
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
          <div className="card-price">₹25</div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src={Padsimage3} />
          </div>
          <div className="card-text">
            {/* <p className="card-meal-type">Small Diper</p> */}
            <h2 className="card-title">Medium Pack Diper</h2>
            <p className="card-body">
             A Pack Of 18 Pads(Avvailable In Diffrent Size)
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
          <div className="card-price">₹100</div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src={Padsimage4} />
          </div>
          <div className="card-text">
            {/* <p className="card-meal-type">Small Diper</p> */}
            <h2 className="card-title">Large Pack Pads</h2>
            <p className="card-body">
            A Pack Of 18 Pads(Avvailable In Diffrent Size)
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
          <div className="card-price">₹99</div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src={Padsimage5} />
          </div>
          <div className="card-text">
            {/* <p className="card-meal-type">Small Diper</p> */}
            <h2 className="card-title">Small Pack Pads</h2>
            <p className="card-body">
            A Pack Of 6 Diper(Avvailable In Diffrent Size)
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
          <div className="card-price">₹36</div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src={Padsimage6} />
          </div>
          <div className="card-text">
            {/* <p className="card-meal-type">Small Diper</p> */}
            <h2 className="card-title">Combo Pack Pads</h2>
            <p className="card-body">
             A Pack Of Combo Pads(Avvailable In Diffrent Size)
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

export default ProductPads;
