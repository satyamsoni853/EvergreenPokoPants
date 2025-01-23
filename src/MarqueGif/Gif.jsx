/* eslint-disable react/no-unknown-property */
import React from 'react'
import './Gif.css'

import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.jpg";
import img5 from "./img5.png";
import img6 from "./img6.png";

function Gif() {
  return (
    <div className='marque-container' >
       <marquee className="marque-img" behavior="scroll" direction="right">
       
        <img src={img2} alt="" className="marquee-image" />
        <img src={img3} alt="" className="marquee-image" />
        <img src={img4} alt="" className="marquee-image" />
        <img src={img5} alt="" className="marquee-image" />
        <img src={img6} alt="" className="marquee-image" />
      </marquee>
    </div>
  )
}

export default Gif