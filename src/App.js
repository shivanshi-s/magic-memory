import { useState } from 'react';
import './App.css';

const cardImages = [
{"src" : "public\img\helmet-1.png"},
{"src" : "public\img\potion-1.png"},
{"src" : "public\img\ring-1.png"},
{"src" : "public\img\scroll-1.png"},
{"src" : "public\img\shield-1.png"},
{"src" : "public\img\sword-1.png"}
]

function App() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)


  const shuffleCards = () => {
    // spread them inside the array - 12 in total
    const shuffledCards = [...cardImages, ...cardImages]
    // fires a func of each pair, if no is less than 0, the order is changed (minus will remain in the same order )
          .sort( () => Math.random() - 0.5)
// fire a func for each item and add an id object, func takes card property spreads it and adds on id
          .map( (card) => ({...card , id : Math.random() } ))
// end result - shuffled card and now store them in a state
    setCards(shuffledCards);
    setTurns(0);

  }

console.log(cards, turns);

  return (
    <div className="App">
      <h1>Magic Matcher</h1>
      <button onClick={shuffleCards}>New Game</button>
    </div>
  );
}

export default App;
