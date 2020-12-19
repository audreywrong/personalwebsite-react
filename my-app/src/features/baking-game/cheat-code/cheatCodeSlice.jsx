import {createSlice} from '@reduxjs/toolkit';

export const cheatCodeSlice = createSlice({
  name: 'cheatCode',
  initialState: {
    poopedOn: false,
  },
  reducers: {
    poopImage: oldCheatCodeSlice => {
      debugger;
      oldCheatCodeSlice.poopedOn = true;
    },
  },
});

export const selectPoopedOn = state => state.poopedOn;
export const {poopImage} = cheatCodeSlice.actions;
export default cheatCodeSlice.reducer;
