import { configureStore } from "@reduxjs/toolkit";
import appslice from "./appslice";
import searchslice from "./searchslice";
import chatslice from "./chatslice";

const store = configureStore({
  reducer: {
    app: appslice,
    search: searchslice,
    chat: chatslice,
  },
});
export default store;
