import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';
import ShoppingCart from './components/ShoppingCart';

const App = () => {
  const [count, setCount] = useState(0);
  const handleCounter = () => setCount(count + 1);
  return (
    <div className="App" >
      <ShoppingCart
        counter={count}
        max={10}
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={handleCounter}>
          play the lottie!
          </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          </a>
      </header>
    </div>
  );
}


export default App;
