import React, { useState, useEffect } from 'react';
import './Herosection.css'; // External CSS for styling
import Heroimage1 from '../Images/herosection.png';
import Heroimage2 from '../Images/herosection1.jpg';
import Heroimage3 from '../Images/herosection3.jpg';
import Heroimage4 from '../Images/herosection4.jpg';
import Heroimage5 from '../Images/herosection5.jpg';
import Heroimage6 from '../Images/herosection6.jpg';
import Gif1 from './gif1.webp'
import Gif2 from './gif2.webp'
import Gif3 from './gif3.webp'
import Gif4 from './gif4.webp'

function Herosection() {
  const images = [Heroimage1, Heroimage2, Heroimage3, Heroimage4, Heroimage5, Heroimage6];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);



  return (
    <div className='herosection-container'>
      <div className="hero-slider">
      <div className="hero-image-container">
        <img src={images[currentIndex]} alt={`Hero image ${currentIndex + 1}`} className="hero-image" />
      </div>
      
    </div>
    <div className="gif-images">
          <img className="gif" src={Gif1} alt="GIF 1" />
          <img className="gif" src={Gif2} alt="GIF 2" />
          <img className="gif" src={Gif3} alt="GIF 3" />
          <img className="gif" src={Gif4} alt="GIF 4" />
        </div>
    </div>
  );
}

export default Herosection;
