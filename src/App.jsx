import { useState } from 'react'
import './App.css';
import Villagers from "./components/Villager";
import GuessBox from './components/GuessBox';
import data from "./components/Villager-data.jsx";

function App() {
  const [seen, setSeen] = useState(0);
  const [flip, setFlip] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);
  const [shuffe, setShuffle] = useState(false);

  const currentAnswer = data[cardIndex]?.name ?? "";  // pull answer from data

  const goNext = () => {
    if (cardIndex < data.length - 1) {
      setFlip(false);
      setCardIndex(cardIndex + 1);
      setSeen(seen + 1);
    }
  };

  const goPrev = () => {
    if (cardIndex > 0) {
      setFlip(false);
      setCardIndex(cardIndex - 1);
    }
  };

  return (
    <>
      <div className="header">
        <h2>Who is that villager ...?</h2>
        <h3>guess the name of the villager by their catchphrase</h3>
      </div>

      <GuessBox answer={currentAnswer} />

      <div className="container">
        <div className="misc">
          <p>card index: {cardIndex}</p>
          <p>seen: {seen + 1}</p>
        </div>
        <div onClick={() => setFlip(!flip)}>
          <Villagers index={cardIndex} state={flip} />
        </div>
      </div>

      <div className="next-flashcard-btn">
        <button onClick={goPrev} disabled={cardIndex === 0}>
          previous
        </button>
        <button onClick={goNext} disabled={cardIndex === data.length - 1}>
          next
        </button>
      </div>
    </>
  );
}

export default App;