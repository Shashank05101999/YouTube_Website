import { configureStore } from "@reduxjs/toolkit";
import appslice from "./appslice";
import searchslice from "./searchslice";
import chatslice from "./chatslice";
import videosSlice from "./videosSlice";

const store = configureStore({
  reducer: {
    app: appslice,
    search: searchslice,
    chat: chatslice,
    videos: videosSlice,
  },
});
export default store;
