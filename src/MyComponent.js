import React, { useState } from 'react';
import Footer from './Footer';

const MyComponent = () => {
  const [number, setNumber] = useState(0);
  return (
    <div className="container">
      <h1>This is the my component</h1>
      <h2 className="number">{number}</h2>
      <button
        className="my-button"
        onClick={() => setNumber(number => number + 1)}
      >
        Submit
      </button>
      <Footer />
    </div>
  );
};

export default MyComponent;
