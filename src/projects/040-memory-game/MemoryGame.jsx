import { useState, useEffect } from 'react';
import './MemoryGame.css';

const cardImages = [
  { src: '🍎', matched: false },
  { src: '🍌', matched: false },
  { src: '🍇', matched: false },
  { src: '🍉', matched: false },
  { src: '🍒', matched: false },
  { src: '🍓', matched: false },
];

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  // Shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  // Handle choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // Compare choices
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  // reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="memory-container">
      <h2>Memory Game</h2>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map((card) => (
          <div className="card-wrapper" key={card.id}>
            <div
              className={`card ${
                card === choiceOne || card === choiceTwo || card.matched
                  ? 'flipped'
                  : ''
              }`}
            >
              <div className="front">{card.src}</div>
              <div
                className="back"
                onClick={() => !disabled && handleChoice(card)}
              >
                ?
              </div>
            </div>
          </div>
        ))}
      </div>
      <p>Turns: {turns}</p>
    </div>
  );
};

export default MemoryGame;
