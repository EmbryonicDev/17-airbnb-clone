import React from 'react';
import Navbar from './components/Navbar';
import { Hero } from './components/Hero';
import Card from './components/Card';
import data from './data';

export default function App() {
  const cardEl = data.map(item => {
    return (
      <Card
        key={item.id} // This is required to avoid errors

        // below can be done with small app
        // img={item.coverImg}
        // rating={item.stats.rating}
        // reviewCount={item.stats.reviewCount}
        // location={item.location}
        // title={item.title}
        // price={item.price}
        // openSpots={item.openSpots}


        // A better option
        item={item}
      />
    )
  })

  return (
    <div id='app'>
      <Navbar />
      <Hero />
      <div id='cardWrap'>
        {cardEl}
      </div>

    </div>
  )
}
