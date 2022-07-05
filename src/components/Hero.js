import React from "react";
import photoGrid from '../assets/photo-grid.png';

export function Hero() {
  return (
    <div id="hero">
      <img src={photoGrid} alt=''></img>
      <h2>Online Experiences</h2>
      <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
      </p>
    </div>
  )
}