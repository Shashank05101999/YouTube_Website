import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
  name: "videos",
  initialState: {
    sideListVideo: null,
    watchPageVideo: null,
  },
  reducers: {
    getSideListvideo: (state, action) => {
      state.sideListVideo = action.payload;
    },
    getWatchPagevideo: (state, action) => {
      state.watchPageVideo = action.payload;
    },
  },
});

export const { getSideListvideo, getWatchPagevideo } = videosSlice.actions;
export default videosSlice.reducer;
