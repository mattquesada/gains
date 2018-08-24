import React, { Component } from 'react';
import Header from './header/Header';
import LeftCard from './leftCard/LeftCard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LeftCard />
      </div>
    );
  }
}

export default App;
