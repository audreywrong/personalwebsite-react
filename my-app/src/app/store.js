import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import cheatCodeSlice from '../features/baking-game/cheat-code/cheatCodeSlice';
import miniGameReducer from '../features/baking-game/mini-game/miniGameSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    cheatCode: cheatCodeSlice,
    miniGame: miniGameReducer,
  },
});
