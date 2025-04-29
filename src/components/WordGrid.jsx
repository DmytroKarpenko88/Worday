// WordGrid.jsx
import React from 'react';

const WordGrid = ({
  guesses,
  currentGuess,
  // answer
}) => {
  const totalRows = 6; // наприклад, 6 спроб

  const getDisplayRows = () => {
    const rows = [...guesses];
    if (rows.length < totalRows) {
      rows.push(currentGuess); // додаємо поточне незавершене слово
    }
    while (rows.length < totalRows) {
      rows.push(''); // заповнюємо порожні рядки
    }
    return rows;
  };

  const displayRows = getDisplayRows();

  return (
    <div className='word-grid'>
      {displayRows.map((word, rowIndex) => (
        <div key={rowIndex} className='word-row'>
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className='tile'>
              {word[i] || ''}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default WordGrid;
