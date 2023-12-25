import { createSlice } from "@reduxjs/toolkit";

const urlSlice = createSlice({
  name: "url",
  initialState: {
    links: [],
  },
  reducers: {
    setData: (state, action) => {
      state.links.push(action.payload);
    },
    // {img: str, brand: str}
  },
});

export const { setData } = urlSlice.actions;

export default urlSlice.reducer;
