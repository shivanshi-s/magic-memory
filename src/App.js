import { useEffect, useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';

const cardImages = [
{"src" : "img/helmet-1.png" , matched : false},
{"src" : "img/potion-1.png" , matched : false},
{"src" : "img/ring-1.png" , matched : false},
{"src" : "img/scroll-1.png" , matched : false},
{"src" : "img/shield-1.png" , matched : false},
{"src" : "img/sword-1.png" , matched : false}
]

function App() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)


  const shuffleCards = () => {
    // spread them inside the array - 12 in total
    const shuffledCards = [...cardImages, ...cardImages]
    // fires a func of each pair, if no is less than 0, the order is changed (minus will remain in the same order )
          .sort( () => Math.random() - 0.5)
// fire a func for each item and add an id object, func takes card property spreads it and adds on id
          .map( (card) => ({...card , id : Math.random() } ))
// end result - shuffled card and now store them in a state
    setCards(shuffledCards)
    setTurns(0)
    
    // set choices to reset
    setChoiceOne(null)
    setChoiceTwo(null)
  }

// console.log(cards, turns);

// handle the choice
const handleChoice = (card) => {
  console.log(card);
 choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
}

// compare two selected cards
useEffect( () => {
  // chexk if we have the same value for c1 and choice 2
  if (choiceOne && choiceTwo){
    setDisabled(true)
    if(choiceOne.src === choiceTwo.src){
      // matched
      setCards(prevCards => {
          return prevCards.map(card => {
            if(card.src === choiceOne.src){
                return {...card, matched : true}
            } else {
              return card
            }
          })
      })
      resetTurn()
    } else {
      //  not matched
      setTimeout(() => resetTurn(), 1000)
    }
  }
}, [choiceOne, choiceTwo])

// useeffect to fire the component when it first loads
useEffect( () => {
  shuffleCards()
}, [])

console.log(cards);

//  reset choices and increase turn
const resetTurn = () => {
  setChoiceOne(null)
  setChoiceTwo(null)
  setTurns(prevTurns => prevTurns + 1)
  setDisabled(false)
}

  return (
    <div className="App">
      <h1>Magic Matcher</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
          {cards.map( card => (
            <SingleCard 
              key={card.id} 
              card={card} 
              handleChoice={handleChoice}
              flipped = {card === choiceOne || card === choiceTwo || card.matched}
              disabled = {disabled}
            />    
            ))}
      </div>
      <p>Turns : {turns}</p>
    </div>
  );
}

export default App;
