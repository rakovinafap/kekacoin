import React, { useState } from 'react';
import './App.css';

function App() {
  const [clicks, setClicks] = useState(0);
  const [floaters, setFloaters] = useState([]);
  const [isShaking, setIsShaking] = useState(false);

  const handleImageClick = (e) => {
    setClicks(clicks + 1);

    // Анимация "трясучки"
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 100); // Длительность анимации должна совпадать с CSS

    // Определение позиции для всплывающего числа
    const rect = e.target.getBoundingClientRect();
    const floater = {
      id: Date.now(),
      value: '+1',
      x: e.clientX - rect.left - 10,
      y: e.clientY - rect.top - 20,
    };

    // Добавление нового всплывающего числа
    setFloaters((prev) => [...prev, floater]);

    // Удаление всплывающего числа через 1 секунду
    setTimeout(() => {
      setFloaters((prev) => prev.filter((f) => f.id !== floater.id));
    }, 1000);
  };

  return (
    <div className="App">
      <h1>Nikole Coin</h1>
      <div className="image-container">
        <img
          src={`${process.env.PUBLIC_URL}/img/image.png`}
          alt="Тап"
          className={`image ${isShaking ? 'shake' : ''}`}
          onClick={handleImageClick}
        />
        {floaters.map((floater) => (
          <div
            key={floater.id}
            className="floater"
            style={{ top: floater.y, left: floater.x }}
          >
            {floater.value}
          </div>
        ))}
      </div>
      <p>Счет: {clicks}</p>
    </div>
  );
}

export default App;
