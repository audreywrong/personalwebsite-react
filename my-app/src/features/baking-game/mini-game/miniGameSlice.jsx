import {createSlice} from '@reduxjs/toolkit';
import breadLoadingScreen from '../../../images/bread-loading-screen.png';
import recipe from '../../../images/recipe.png';
import mixingBowl from '../../../images/mixing-bowl.png';
import breadShaping from '../../../images/bread-shaping.png';
import rising from '../../../images/rising.png';
import resting from '../../../images/sleeping-bread.png';
import baking from '../../../images/baking.png';
import freshLoaf from '../../../images/fresh-loaf.png';
import frankenbread from '../../../images/frankenbread.png';

export const miniGameSlice = createSlice({
  name: 'miniGame',
  initialState: {
    currentStepNumber: 0,
    steps: [
      {
        stepNumber: 0,
        hasMiniGame: false,
        isMiniGameSolved: false,
        buttonText: `Let's Bake!`,
        image: breadLoadingScreen,
        imgClass: 'floating-image',
      },
      {
        stepNumber: 1,
        hasMiniGame: false,
        isMiniGameSolved: false,
        buttonText: `Time to mix!`,
        image: recipe,
        imgClass: 'still-image',
      },
      {
        stepNumber: 2,
        hasMiniGame: false,
        isMiniGameSolved: false,
        buttonText: `It's aliiiiive!`,
        image: mixingBowl,
        imgClass: 'still-image',
      },
      {
        stepNumber: 3,
        hasMiniGame: true,
        isMiniGameSolved: false,
        buttonText: `Ah, shape it, shape it good, sh-sh-shape it real good!`,
        slideImage: frankenbread,
        imgClass: 'still-image',
      },
      {
        stepNumber: 4,
        hasMiniGame: false,
        isMiniGameSolved: false,
        buttonText: `It has to rise. Again.`,
        image: breadShaping,
        imgClass: 'still-image',
      },
      {
        stepNumber: 5,
        hasMiniGame: false,
        isMiniGameSolved: false,
        buttonText: `Time to take a little nap!`,
        image: rising,
        imgClass: 'still-image',
      },
      {
        stepNumber: 6,
        hasMiniGame: false,
        isMiniGameSolved: false,
        buttonText: `Bake this!`,
        image: resting,
        imgClass: 'still-image',
      },
      {
        stepNumber: 7,
        hasMiniGame: false,
        isMiniGameSolved: false,
        buttonText: `Let's get this bread!`,
        image: baking,
        imgClass: 'still-image',
      },
      {
        stepNumber: 8,
        hasMiniGame: false,
        isMiniGameSolved: false,
        buttonText: `You win! Want to bake again?`,
        image: freshLoaf,
        imgClass: 'floating-image',
      },
    ],
  },
  reducers: {
    setStepIsSolved: state => {
      state.steps[state.currentStepNumber].isMiniGameSolved = true;
    },
    setCurrentStep: (state, action) => {
      state.currentStepNumber = action.payload;
    },
  },
});

export const selectStep = state => {
  return state.miniGame.steps[state.miniGame.currentStepNumber];
};
export const {setStepIsSolved, setCurrentStep} = miniGameSlice.actions;
export default miniGameSlice.reducer;
