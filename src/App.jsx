import { useState, useEffect } from 'react';
import WordGrid from './components/WordGrid';
import './style/App.css';

// Поки що просто фіксоване слово. Пізніше винесемо в data/words.js
const answer = 'APPLE';

function App() {
  const [currentGuess, setCurrentGuess] = useState('');
  const [guesses, setGuesses] = useState([]);

  // Обробка натискань клавіш
  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toUpperCase();

      if (/^[A-Z]$/.test(key)) {
        // Якщо буква і ще не 5 символів
        if (currentGuess.length < 5) {
          setCurrentGuess((prev) => prev + key);
        }
      } else if (key === 'BACKSPACE') {
        setCurrentGuess((prev) => prev.slice(0, -1));
      } else if (key === 'ENTER') {
        if (currentGuess.length === 5) {
          setGuesses((prev) => [...prev, currentGuess]);
          setCurrentGuess('');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentGuess]);

  return (
    <div className='app'>
      <h1>Worday</h1>
      <WordGrid guesses={guesses} currentGuess={currentGuess} answer={answer} />
    </div>
  );
}

export default App;
