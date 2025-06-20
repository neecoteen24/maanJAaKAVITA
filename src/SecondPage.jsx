import React, { useState, useRef } from "react";
import './SecondPage.css';
import { useNavigate } from "react-router-dom";
import bgVideo from "./assets/vecteezy_blue-purple-glowing-geometric-abstract-background-pattern-of_31129768.mp4";
import monkeyImg from "./assets/anurag.PNG";
import img1 from "./assets/Screenshot 2025-06-20 223223.png";
import img2 from "./assets/Screenshot 2025-06-20 223251.png";
import img3 from "./assets/Screenshot 2025-06-20 223315.png";
import audioFile from "./assets/Dear Mamma - Amantej Hundal-[AudioTrimmer.com].mp3";

function SecondPage() {
  const navigate = useNavigate();
  const [showLetter, setShowLetter] = useState(false);
  const [showMonkeyOverlay, setShowMonkeyOverlay] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);
  const audioRef = useRef(null);

  const handlePlay = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };
  const handlePause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };
  const handleResume = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };
  const handleAudioChange = (e) => {
    const value = e.target.value;
    audioRef.current.currentTime = value;
    setAudioProgress(value);
  };
  const handleTimeUpdate = () => {
    setAudioProgress(audioRef.current.currentTime);
  };

  return (
    <div className="second-page-container">
      <video
        className="second-background-video"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="envelope-container">
        <span
          className="envelope-emoji"
          tabIndex={0}
          role="button"
          aria-label="Red Envelope"
          onClick={() => setShowLetter(true)}
        >
          🧧
        </span>
        <div className="envelope-text">CLICK TO OPEN THE LETTER</div>
      </div>
      <div className="back-btn-container">
        <button className="back-btn" onClick={() => navigate("/")}>Back to First Page</button>
      </div>
      <div className="monkey-section">
        <button className="monkey-btn" onClick={() => setShowMonkeyOverlay(true)}>
          <img src={monkeyImg} alt="monkey" className="monkey-img" />
        </button>
        <span className="monkey-text">click on this monkey to know what else is he saying</span>
      </div>
      <div className="audio-section audio-bottom">
        <div className="audio-heading">Final Message For Kavita Ji</div>
        <audio
          ref={audioRef}
          src={audioFile}
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setIsPlaying(false)}
        />
        <div className="audio-controls">
          <button onClick={handlePlay} disabled={isPlaying} className="audio-btn">Play</button>
          <button onClick={handlePause} disabled={!isPlaying} className="audio-btn">Pause</button>
          <button onClick={handleResume} disabled={isPlaying} className="audio-btn">Resume</button>
          <input
            type="range"
            min={0}
            max={audioRef.current ? audioRef.current.duration : 0}
            value={audioProgress}
            onChange={handleAudioChange}
            className="audio-slider"
          />
        </div>
      </div>
      <div className="next-btn-container">
        <button className="next-btn" onClick={() => navigate("/third")}>Next Page</button>
      </div>
      {showLetter && (
        <div className="letter-overlay">
          <div className="letter-content">
            <button className="close-letter" onClick={() => setShowLetter(false)}>&times;</button>
            <div className="letter-scroll">
              <h2>Dear KAVI DIDI,</h2>
              <p>I'm writing this because... yeah, I messed up.</p>
              <p>I left you on seen the other day. No reply, no emoji, not even a "Accha." Just vibes. Bad ones.</p>
              <p>I didn't mean to ignore you — I saw your message, smiled, and thought, "I'll reply in a bit."<br/>
              But then, a bit turned into a whole day, and now here we are: you're giving me the silent treatment.</p>
              <p>And honestly? I deserve it 😔</p>
              <p>You're now returning the favor like a pro. I get it. Respect.</p>
              <p>So here I am, officially saying SORRY. Let's not fight over this silly little scene of "seen."</p>
              <p>Please forgive this dumb human and let's get back to being the cool duo we are 💌</p>
              <p>Waiting for your reply like a sad WiFi signal…</p>
              <p style={{marginTop: '2rem'}}>
                – [Anurag]<br/>
                <span style={{fontSize: '0.9em'}}>(The one who fked up)</span>
              </p>
            </div>
          </div>
        </div>
      )}
      {showMonkeyOverlay && (
        <div className="monkey-overlay">
          <div className="monkey-overlay-content">
            <button className="close-letter" onClick={() => setShowMonkeyOverlay(false)}>&times;</button>
            <div className="monkey-overlay-heading">TOP THREE CUTU FEMALE LIST (ONURAG EDITION):</div>
            <div className="monkey-overlay-images">
              <img src={img1} alt="cutu1" className="cutu-img" />
              <img src={img2} alt="cutu2" className="cutu-img" />
              <img src={img3} alt="cutu3" className="cutu-img" />
            </div>
            <div className="monkey-overlay-note">Sorry, ye maine tere insta se ss liya hai</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SecondPage; 