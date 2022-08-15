import React from 'react'
import './SingleCard.css'

export default function SingleCard({ card, handleChoice }) {

  const handleClick = (card) => {
    console.log(card);
  }

  return (
   <div className="card">
         <div>
            <img src={card.src} className="card front" alt='frontimg'/>
            <img src="/img/cover.png" onClick={handleClick} className="card back" alt='backimg'/>
         </div>
   </div>
  )
}
