import React, { Component } from 'react';
import './App.css';
import Secret from './Components/Secret.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="Title">
          Guess the Secret Word
        </h1>
        <Secret
          title="Alpha"
          words={["Elephant", "Bubble", "Moon", "Bookkeeper"]}
          answer="Elephant"/>
        <Secret
          title="Beta"
          words={["Gemstone", "Mysterium", "Archer", "Orangutan"]}
          answer="Orangutan"/>
        <Secret
          title="Delta"
          words={["Door", "Hive", "Ocelot", "Cloud"]}
          answer="Ocelot"/>
        <Secret
          title="Omega"
          words={["Blanket", "Micro-pig", "Resins", "Banana"]}
          answer="Micro-pig"/>
      </div>
    );
  }
}

export default App;
