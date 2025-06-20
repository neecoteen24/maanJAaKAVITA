import React, { useRef, useState } from "react";
import './FirstPage.css';
import firstpageVideo from "./assets/firstpage.mov";
import cloudImg from "./assets/vecteezy_single-white-cumulus-cloud-isolated-on-white-background_47831704.png";

function FirstPage({ onYes }) {
  const featuresRef = useRef(null);
  const [transitioning, setTransitioning] = useState(false);

  const handleYesClick = () => {
    if (onYes) {
      setTransitioning(true);
      setTimeout(() => {
        onYes();
      }, 1200); // Match with animation duration
    } else {
      featuresRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="first-page-container">
      <video
        className="background-video"
        src={firstpageVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="overlay">
        <h1>
          This is for KAVITA, so if you are someone else peeche hato (respectfully)
        </h1>
        <p>press YES button if ur kavita</p>
        <button className="yes-button" onClick={handleYesClick}>
          YES
        </button>
      </div>
      <div ref={featuresRef} className="features-section">
        {/* More features go here */}
      </div>
      {transitioning && (
        <div className="cloud-transition">
          <img src={cloudImg} className="cloud cloud1" alt="cloud" />
          <img src={cloudImg} className="cloud cloud2" alt="cloud" />
          <img src={cloudImg} className="cloud cloud3" alt="cloud" />
        </div>
      )}
    </div>
  );
}

export default FirstPage; 