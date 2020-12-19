import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import poopReducer from '../features/baking-game/cheat-code/cheatCodeSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    cheatCode: poopReducer,
  },
});
