import React from 'react';
import './App.css';
import Secret from './Components/Secret.js';

const App = () => {
  return (
    <div className="App">
      <h1 className="Title">
        Guess the Secret Word
      </h1>
      <Secret title="Alpha" words={["Elephant", "Bubble", "Moon", "Bookkeeper"]} answer="Elephant"/>
    </div>
  );
}

export default App;
