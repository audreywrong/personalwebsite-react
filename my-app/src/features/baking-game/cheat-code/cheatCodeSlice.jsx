import {createSlice} from '@reduxjs/toolkit';

export const cheatCodeSlice = createSlice({
  name: 'cheatCode',
  initialState: {
    value: false,
  },
  reducers: {
    poopImage: state => {
      state.value = true;
    },
  },
});

export const selectPoopedOn = state => {
  return state.cheatCode.value;
};
export const {poopImage} = cheatCodeSlice.actions;
export default cheatCodeSlice.reducer;
