import { useState } from 'react'
import './App.css';
import Villagers from "./components/Villager";

function App() {
  const [seen, setSeen] = useState(0);
  const [flip, setFlip] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);

  const randomNumber = () => {
    const random = Math.floor(Math.random() * 9) + 1;
    setCardIndex(random);
  }

  return (
    <>
      <div className="header">
        <h2>Who is that villager ...?</h2>
        <h3>guess the name of the villager by their catchphrase</h3>
      </div>

      <div className="container">
        <div className="misc">
          <p>card index: {cardIndex}</p>
          <p>seen: {seen+1}</p>
        </div>
        
        <div onClick={() => {setFlip(!flip)}}>
          <Villagers index={cardIndex} state={flip}/>
        </div>
      </div>

      <div className="next-flashcard-btn">
        <button onClick={()=>{setFlip(flip ? !flip : flip); setCardIndex(cardIndex != 0 ? cardIndex - 1: cardIndex)}}>previous</button>
        <button onClick={()=>{setSeen(seen + 1); setFlip(flip ? !flip : flip); randomNumber()}}>next</button>
      </div>
    </>
  )
}

export default App
