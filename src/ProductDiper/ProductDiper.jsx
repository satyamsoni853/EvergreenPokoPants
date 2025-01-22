import React from "react";
import './ProductDiper.css'
import DiperImage1 from '../ProductImage/diper1.jpg'
import DiperImage2 from '../ProductImage/diper2.jpg'
import DiperImage3 from '../ProductImage/diper3.jpg'
import DiperImage4 from '../ProductImage/diper4.jpg'
import DiperImage5 from '../ProductImage/dipercombo.jpg'


function ProductDiper() {
  return (
    <div>
      <div id="header">
        <h1>Our Diaper Section in the Professional World</h1>
      </div>
      <div className="container">
        <div className="card">
          <div className="card-image">
            <img src={DiperImage1} />
          </div>
          <div className="card-text">
            {/* <p className="card-meal-type">Small Diper</p> */}
            <h2 className="card-title">Big Pack  Diper</h2>
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
            <img src={DiperImage2} />
          </div>
          <div className="card-text">
            {/* <p className="card-meal-type">Small Diper</p> */}
            <h2 className="card-title">Small Pack Diper</h2>
            <p className="card-body">
            A Pack Of 10 Diper(Avvailable In Diffrent Size)
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
            <img src={DiperImage3} />
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
            <img src={DiperImage4} />
          </div>
          <div className="card-text">
            {/* <p className="card-meal-type">Small Diper</p> */}
            <h2 className="card-title">Single Pack Diper</h2>
            <p className="card-body">
            A Pack Of 1 Diper(Avvailable In Diffrent Size)
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
          <div className="card-price">₹15</div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src={DiperImage5} />
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
          <div className="card-price">₹1199</div>
        </div>
        
      </div>
    </div>
  );
}

export default ProductDiper;
