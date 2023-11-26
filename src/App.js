import React, {useState, useEffect, useRef } from "react";
import VideoBackground from "./components/VideoBackground";
import "./App.css";

const App = () => {
  const words = ["United, Unbound", "Creative, Innovative"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDescriptionVisible, setDescriptionVisible] = useState(true);
  const titleRef = useRef();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDescriptionVisible(false);

      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setDescriptionVisible(true);
      }, 1000);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [words.length]);

  useEffect(() => {
    const title = titleRef.current;

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const titleTop = title.getBoundingClientRect().top;

      const threshold = titleTop / windowHeight;

      if (threshold > 0.2 && threshold < 0.8) {
        title.classList.add("reveal");
      } else {
        title.classList.remove("reveal");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="app-container">
      <div className="video-container">
        <VideoBackground />
      </div>

      <h1 className="top-left-heading">AQUIRE</h1>
      <p className={`description ${isDescriptionVisible ? "visible" : ""}`}>
        {words[currentWordIndex]}
      </p>
      <div className="nav">
        <span>Work</span>
        <span>Manifesto</span>
        <span>Team</span>
        <span>Contact</span>
      </div>
      <div className="Introduction">
        <div ref={titleRef} className="title">
          We Integrate Collaborate and Challenge.
        </div>
      </div>
    </div>
  );
};

export default App;
