import React, { Component } from 'react';
import Header from './header/Header';
import MainPage from './mainPage/MainPage';
import Footer from './footer/Footer';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <MainPage />
      </div>
    );
  }
}

export default App;
