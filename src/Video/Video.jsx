import React from "react";
import './Video.css';
import video1 from "../Images/video1.mp4";
import video2 from "../Images/video2.mp4";

function Video() {
  return (
   <div className="fatory-container">
    <h1 className="factory-video-heading">Explore Our State-of-the-Art Factory</h1>
     <div className="factory-video-container">
      
      <div className="factory-video">
        <video autoPlay loop muted controls>
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="factory-video">
        <video autoPlay loop muted controls>
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
   </div>
  );
}

export default Video;
