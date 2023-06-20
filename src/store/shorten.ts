import { createSlice } from "@reduxjs/toolkit";

interface IShortenRef {
  ref: React.MutableRefObject<null | HTMLDivElement> | null;
}

const initialState: IShortenRef = {
  ref: null,
};

const shortenSlice = createSlice({
  name: "shorten",
  initialState,
  reducers: {
    changeShortenRef: (state, action) => {
      state.ref = action.payload;
    },
  },
});

export const { changeShortenRef } = shortenSlice.actions;
export default shortenSlice.reducer;
