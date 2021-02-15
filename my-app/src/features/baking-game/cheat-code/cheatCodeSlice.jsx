import {createSlice} from '@reduxjs/toolkit';

export const cheatCodeSlice = createSlice({
  name: 'cheatCode',
  initialState: {
    value: false,
  },
  reducers: {
    emojiImage: state => {
      state.value = true;
    },
  },
});

export const selectEmojiPic = state => {
  return state.cheatCode.value;
};
export const {emojiImage} = cheatCodeSlice.actions;
export default cheatCodeSlice.reducer;
