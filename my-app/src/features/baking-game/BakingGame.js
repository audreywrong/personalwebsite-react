import React from 'react';
import './BakingGame.css';
import breadLoadingScreen from '../../bread-loading-screen.png';

function BakingGame() {
    return (
      <>
      <img src={breadLoadingScreen} className="App-loading-pic" alt="loading" />
      <button>Let's Bake!</button>
      </>
    )
  }


export default BakingGame;