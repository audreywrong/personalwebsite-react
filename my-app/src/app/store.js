import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import poopReducer from '../features/baking-game/cheat-code/cheatCodeSlice';
import miniGameReducer from '../features/baking-game/mini-game/miniGameSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    cheatCode: poopReducer,
    miniGame: miniGameReducer,
  },
});
