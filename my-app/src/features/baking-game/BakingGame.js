import {React, useEffect, useRef, useState} from 'react';
import './BakingGame.css';
import breadLoadingScreen from '../../images/bread-loading-screen.png';
import recipe from '../../images/recipe.png';
import mixingBowl from '../../images/mixing-bowl.png';
import frankenBread from '../../images/frankenbread.jpg';
import breadShaping from '../../images/bread-shaping.jpg';
import rising from '../../images/rising.png';
import resting from '../../images/sleeping-bread.png';
import baking from '../../images/baking.jpg';
import freshLoaf from '../../images/fresh-loaf.png';

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
      <img src={currentStepRef.current.image} className={currentStepRef.current.imgClass} alt="logo" />
      <button onClick = {handleClick}>
      {currentStepRef.current.buttonText}</button>
      </>
    )
  }

  // type = step[]
  const steps = [{stepNumber: 0, buttonText: `Let's Bake!`, image: breadLoadingScreen, imgClass: 'floating-image'}, {stepNumber: 1, buttonText: `Time to mix!`, image: recipe, imgClass: 'still-image'}, {stepNumber: 2, buttonText: `It's aliiiiive!`, image: mixingBowl, imgClass: 'still-image'}, {stepNumber: 3, buttonText: `Ah, shape it, shape it good, sh-sh-shape it real good!`, image: frankenBread, imgClass: 'still-image'}, {stepNumber: 4, buttonText: `It has to rise. Again.`, image: breadShaping, imgClass: 'still-image'}, {stepNumber: 5, buttonText: `Time to take a little nap!`, image: rising, imgClass: 'still-image'}, {stepNumber: 6, buttonText: `Bake this!`, image: resting, imgClass: 'still-image'}, {stepNumber: 7, buttonText: `Let's get this bread!`, image: baking, imgClass: 'still-image'}, {stepNumber: 8, image: freshLoaf, imgClass: 'floating-image'}]

export default BakingGame;