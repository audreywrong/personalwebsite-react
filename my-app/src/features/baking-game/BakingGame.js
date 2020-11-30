import {React, useEffect, useRef, useState} from 'react';
import './BakingGame.css';
import breadLoadingScreen from '../../bread-loading-screen.png';
import recipe from '../../images/recipe.png';
import frankenBread from '../../images/frankenbread.jpg';
import mixingBowl from '../../images/mixing-bowl.png';
import breadShaping from '../../images/bread-shaping.jpg';

function BakingGame() {

  const [currentStepNumber, setCurrentStepNumber] = useState(0);
  const currentStepRef = useRef(steps[0]); 

  useEffect(() => {
    currentStepRef.current = steps[currentStepNumber + 1];
  }, [currentStepNumber]);

  function handleClick() {
    setCurrentStepNumber(currentStepNumber + 1);
  }

  return (
      <>
      <img src={currentStepRef.current.image} className="App-loading-pic" alt="loading" />
      <button onClick = {handleClick}>
      {currentStepRef.current.buttonText}</button>
      </>
    )
  }

  // type = step[]
  const steps = [{stepNumber: 0, buttonText: `Let's Bake!`, image: breadLoadingScreen}, {stepNumber: 1, buttonText: `Time to mix!`, image: recipe}, {stepNumber: 2, buttonText: `It's aliiiiive!`, image: mixingBowl}, {stepNumber: 3, buttonText: `Ah, shape it, shape it good, sh-sh-shape it real good!`, image: frankenBread}, {stepNumber: 4, buttonText: `It has to rise. Again.`, image: breadShaping}, {stepNumber: 5, buttonText: `Time to take a little nap!`}, {stepNumber: 6, buttonText: `Bake this!`}, {stepNumber: 7, buttonText: `Let's get this bread!`}, {stepNumber: 8}]

export default BakingGame;