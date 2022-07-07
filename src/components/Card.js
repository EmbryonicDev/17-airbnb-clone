import React from "react";
import katie from '../assets/katie-zaferes.png'
import star from '../assets/star.png'

/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/

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