import {React, useEffect, useRef, useState} from 'react';
import './BakingGame.css';
import breadLoadingScreen from '../../bread-loading-screen.png';

function BakingGame() {

  const [currentStepNumber, setCurrentStepNumber] = useState(0);
  const proceedButtonRef = useRef(`Let's Bake!`); 

  useEffect(() => {
    proceedButtonRef.current = steps[currentStepNumber + 1].buttonText;
  }, [currentStepNumber]);

  function handleClick() {
    setCurrentStepNumber(currentStepNumber + 1);
    console.log(proceedButtonRef)
  }

  return (
      <>
      <img src={breadLoadingScreen} className="App-loading-pic" alt="loading" />
      <button onClick = {handleClick}>
      {proceedButtonRef.current}</button>
      </>
    )
  }

  // type = step[]
  const steps = [{stepNumber: 0, buttonText: `Let's Bake!`}, {stepNumber: 1, buttonText: `Time to mix!`}, {stepNumber: 2, buttonText: `It's aliiiiive!`}, {stepNumber: 3, buttonText: `Ah, shape it, shape it good, sh-sh-shape it real good!`}, {stepNumber: 4, buttonText: `It has to rise. Again.`}, {stepNumber: 5, buttonText: `Time to take a little nap!`}, {stepNumber: 6, buttonText: `Bake this!`}, {stepNumber: 7, buttonText: `Let's get this bread!`}, {stepNumber: 8}]

export default BakingGame;