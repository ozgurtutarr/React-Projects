import { useState } from 'react';
import './RandomQuoteGenerator.css';

const RandomQuoteGenerator = () => {
  const quotes = [
    {
      text: 'The only way to do great work is to love what you do.',
      author: 'Steve Jobs',
    },
    {
      text: "Life is what happens when you're busy making other plans.",
      author: 'John Lennon',
    },
    { text: 'Get busy living or get busy dying.', author: 'Stephen King' },
    {
      text: 'You only live once, but if you do it right, once is enough.',
      author: 'Mae West',
    },
    { text: 'The purpose of our lives is to be happy.', author: 'Dalai Lama' },
    {
      text: 'Get your facts first, then you can distort them as you please.',
      author: 'Mark Twain',
    },
    {
      text: "You miss 100% of the shots you don't take.",
      author: 'Wayne Gretzky',
    },
    {
      text: "I have not failed. I've just found 10,000 ways that won't work.",
      author: 'Thomas A. Edison',
    },
    {
      text: 'It is never too late to be what you might have been.',
      author: 'George Eliot',
    },
    {
      text: 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.',
      author: 'Ralph Waldo Emerson',
    },
  ];

  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  return (
    <div className="quote-container">
      <h2>Random Quote Generator</h2>
      <div className="quote-box">
        <p className="quote-text">"{currentQuote.text}"</p>
        <p className="quote-author">- {currentQuote.author}</p>
      </div>
      <button className="new-quote-btn" onClick={generateRandomQuote}>
        New Quote
      </button>
    </div>
  );
};

export default RandomQuoteGenerator;
