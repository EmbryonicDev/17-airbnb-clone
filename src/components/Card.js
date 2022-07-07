import React from "react";
import katie from '../assets/katie-zaferes.png'
import star from '../assets/star.png'

export default function Card() {
  return (
    <div className="card">
      <img src={katie} alt='' className='cardPic'></img>
      <textNode>SOLD OUT</textNode>
      <div className="cardText">
        <div className="rating">
          <img src={star} alt='' className="star"></img>
          <span> 5.0</span>
          <span> (6) • USA
          </span>
        </div>
        <div className="title">
          Life lessons with Katie Zaferes
        </div>
        <div className="price">
          <span>From $136</span>
          <span> / person</span>
        </div>
      </div>
    </div>
  )
}