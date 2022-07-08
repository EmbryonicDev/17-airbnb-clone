import React from "react";
import star from '../assets/star.png'

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.img} alt='' className='cardPic'></img>
      <div className="imgBtn">SOLD OUT</div>
      <div className="cardText">
        <div className="rating">
          <img src={star} alt='' className="star"></img>
          <span> {props.rating}</span>
          <span className="greyText"> ({props.reviewCount})</span>
          <span className="greyText"> {props.location}</span>
        </div>
        <div className="title">
          {props.title}
        </div>
        <div className="price">
          <span>From ${props.price}</span>
          <span> / person</span>
        </div>
      </div>
    </div>
  )
}