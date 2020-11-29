import {React, useState} from 'react';
import './BakingGame.css';
import breadLoadingScreen from '../../bread-loading-screen.png';

function BakingGame() {
  const [nextButtonText, setNextButtonText] = useState(`Let's Bake`);  
  return (
      <>
      <img src={breadLoadingScreen} className="App-loading-pic" alt="loading" />
      <button onClick={() => setNextButtonText(`Knead on to step 2!`)}>{nextButtonText}</button>
      </>
    )
  }


export default BakingGame;