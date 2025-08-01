import React from 'react';
import "./Hero.css";

const Hero = ({ imageSrc }) => {
  return (
    <div className="hero">
      <img src={imageSrc} alt="task" className="hero-image" />
      <div className="hero-content">
        <h1 className="hero-title">TaskFlow</h1>
        <p className="hero-subtitle">A tool that helps people organize their tasks.</p>
        <button className="hero-button">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
