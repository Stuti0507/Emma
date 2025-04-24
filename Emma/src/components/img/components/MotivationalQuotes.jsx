import React, { useState } from 'react';
import './MotivationalQuotes.css';

const quotes = [
  "Believe in yourself and all that you are.",
  "Your limitation—it’s only your imagination.",
  "Push yourself, because no one else is going to do it for you.",
  "Sometimes later becomes never. Do it now.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "Success doesn’t just find you. You have to go out and get it.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Little things make big days.",
  "It’s going to be hard, but hard does not mean impossible.",
];

const MotivationalQuotes = () => {
  const [quote, setQuote] = useState(quotes[0]);

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="quote-container">
      <h2 className="quote-title"></h2>
      <p className="quote-text">"{quote}"</p>
      <button className="quote-button" onClick={generateQuote}>Inspire Me 🌟</button>
    </div>
  );
};

export default MotivationalQuotes;
