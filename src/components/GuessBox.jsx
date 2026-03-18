import { useState, useEffect } from "react";
import "../index.css";

function GuessBox({ answer }) {
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');

  // Reset when the card changes
  useEffect(() => {
    setGuess('');
    setFeedback('');
  }, [answer]);

  const checkAnswer = () => {
    if (guess.toLowerCase().trim() === answer.toLowerCase().trim()) {
      setFeedback('correct');
    } else {
      setFeedback('incorrect');
    }
  };

  return (
    <div className="guess-box-container">
      <h4>Guess the answer?</h4>
      <input
        type="text"
        placeholder="enter a name"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        className={feedback}
      />
      <button className="submit-btn" onClick={checkAnswer}>submit</button>
      {feedback && (
        <div className={`feedback ${feedback}`}>
          {feedback === 'correct' ? 'Correct!' : 'Incorrect!'}
        </div>
      )}
    </div>
  );
}

export default GuessBox;