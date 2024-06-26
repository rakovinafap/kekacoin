import React, { useState } from 'react';
import './App.css';

function App() {
  const [clicks, setClicks] = useState(0);

  const handleCircleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className="App">
      <h1>Kek Coin</h1>
      <div className="circle" onClick={handleCircleClick}></div>
      <p>Point: {clicks}</p>
    </div>
  );
}

export default App;
