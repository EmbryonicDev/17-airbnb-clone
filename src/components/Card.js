import React from "react";
import star from '../assets/star.png'

export default function Card(props) {
  console.log(props.item)
  let badgeText
  if (props.item.openSpots === 0) {
    badgeText = 'SOLD OUT'
  } else if (props.item.location === 'Online') {
    badgeText = 'ONLINE'
  }
  return (
    <div className="card">
      <img src={props.item.coverImg} alt='' className='cardPic'></img>
      {badgeText && <div className="imgBtn">{badgeText}</div>}
      <div className="cardText">
        <div className="rating">
          <img src={star} alt='' className="star"></img>
          <span> {props.item.stats.rating}</span>
          <span className="greyText"> ({props.item.stats.reviewCount})</span>
          <span className="greyText"> {props.item.location}</span>
        </div>
        <div className="title">
          {props.item.title}
        </div>
        <div className="price">
          <span>From ${props.item.price}</span>
          <span> / person</span>
        </div>
      </div>
    </div>
  )
}