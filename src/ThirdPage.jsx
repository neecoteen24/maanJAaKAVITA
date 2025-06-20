import React, { useState } from "react";
import './ThirdPage.css';
import bgVideo from "./assets/vecteezy_blue-purple-glowing-geometric-abstract-background-pattern-of_31129768.mp4";
import playVideo from "./assets/videoplayback.mp4";

const rainWords = [
  "PLEASEE",
  "PLEAAASEEEEEEEE",
  "MAAN JA NAAAAA",
  "MAAN JAAA"
];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function RainOverlay() {
  // Generate 30 raining words with random positions, directions, and delays
  const rainElements = Array.from({ length: 30 }).map((_, i) => {
    const word = rainWords[getRandomInt(0, rainWords.length - 1)];
    const side = getRandomInt(0, 3); // 0: top, 1: right, 2: bottom, 3: left
    const delay = Math.random() * 1.5;
    const duration = 2.5 + Math.random() * 1.5;
    let style = { animationDelay: `${delay}s`, animationDuration: `${duration}s` };
    if (side === 0) {
      // from top
      style = { ...style, left: `${getRandomInt(5, 90)}vw`, top: '-5vh', animationName: 'rain-down' };
    } else if (side === 1) {
      // from right
      style = { ...style, top: `${getRandomInt(5, 90)}vh`, right: '-10vw', animationName: 'rain-left' };
    } else if (side === 2) {
      // from bottom
      style = { ...style, left: `${getRandomInt(5, 90)}vw`, bottom: '-5vh', animationName: 'rain-up' };
    } else {
      // from left
      style = { ...style, top: `${getRandomInt(5, 90)}vh`, left: '-10vw', animationName: 'rain-right' };
    }
    return (
      <span className="rain-word" style={style} key={i}>{word}</span>
    );
  });
  return (
    <div className="rain-overlay">
      {rainElements}
    </div>
  );
}

function ThirdPage() {
  const [showPlayVideo, setShowPlayVideo] = useState(false);
  const [rainCount, setRainCount] = useState(0);
  return (
    <div className="third-page-container">
      <video
        className="third-background-video"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="third-content">
        <h1 className="third-heading">MAAFI MILEGI KAVITAAAAAA :(</h1>
        <div className="third-btn-group">
          <button className="third-btn yes" onClick={() => setShowPlayVideo(true)}>YES</button>
          <button className="third-btn no" onClick={() => setRainCount(c => c + 1)}>NO</button>
        </div>
      </div>
      {showPlayVideo && (
        <div className="playvideo-overlay">
          <button className="close-playvideo" onClick={() => setShowPlayVideo(false)}>&times;</button>
          <video
            className="playvideo-main"
            src={playVideo}
            autoPlay
            controls
            loop
            style={{ maxWidth: '90vw', maxHeight: '80vh', borderRadius: '1.5rem', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 2px 16px #ffb6c1' }}
          />
        </div>
      )}
      {Array.from({ length: rainCount }).map((_, i) => <RainOverlay key={i} />)}
    </div>
  );
}

export default ThirdPage; 