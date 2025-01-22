/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Benfit.css';
import Benifitimg1 from '../Images/Productdesc1.jpg';
import Benifitimg2 from '../Images/Productdesc2.jpg';
import Benifitimg3 from '../Images/Productdesc3.jpg';
import Benifitimg4 from '../Images/Productdesc4.jpg';

function Benfit() {
  const images = [Benifitimg1, Benifitimg2, Benifitimg3, Benifitimg4];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically move to the next set of images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 3) % images.length); // Move by 3 images
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  // Get the images to display (3 images at a time)
  const displayedImages = [
    images[currentIndex],
    images[(currentIndex + 1) % images.length],
    images[(currentIndex + 2) % images.length], // Adding the third image
  ];

  return (
    <div className="slider-container">
      <h2 className="Benifit-slider-heading">Exclusive Benefits</h2>
      
      <div className="image-wrapper">
        {displayedImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${currentIndex + index + 1}`}
            className="slider-image"
          />
        ))}
      </div>
    </div>
  );
}

export default Benfit;
