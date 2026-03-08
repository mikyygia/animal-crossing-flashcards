import { useState } from 'react'
import './App.css';
import Villagers from "./components/Villager";

function App() {
  const [seen, setSeen] = useState(0);
  const [flip, setFlip] = useState(false);

  return (
    <>

      <div className="header">
        <h2>Who is that villager ...?</h2>
        <h3>guess the name of the villager by their catchphrase</h3>
      </div>

      <div className="container">
        <p>total: {seen}/9</p>

        <div className="flashcard-container"  onClick={() => {setFlip(!flip)}}>
          <Villagers index={seen} state={flip}/>
        </div>
      </div>

      <div className="next-flashcard-btn">
        <button onClick={()=>setSeen(seen > 0 ? seen - 1 : seen)}>previous</button>
        <button onClick={()=>setSeen(seen != 9 ? seen + 1: 0)}>next</button>
      </div>
    </>
  )
}

export default App
