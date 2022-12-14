import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Player from './Player';
import Footer from './Footer';
import React, { Component }  from 'react';


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Player/>
      <Footer/>
    </div>
  );
}

export default App;
