import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Link } from "../types/ShortedUrlApiResponse";
import { shortUrl } from "../api/mock-api";

interface ILinksState {
  links: Array<Link>;
}

const initialState: ILinksState = {
  links: [],
};

export const shortLink = createAsyncThunk(
  "shortLink",
  async (originalUrl: string) => {
    const response = await shortUrl(originalUrl);

    return response;
  }
);

const linksSlice = createSlice({
  name: "links",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(shortLink.fulfilled, (state, action) => {
      state.links.push(action.payload);
    });
  },
});

export default linksSlice.reducer;
