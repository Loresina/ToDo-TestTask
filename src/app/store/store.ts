import { configureStore } from "@reduxjs/toolkit";

import toDoSlice from "./toDoSlice";

const appStore = configureStore({
  reducer: {
    toDo: toDoSlice,
  },
});

export default appStore;

export type RootState = ReturnType<typeof store.getState>;

export type AppStore = typeof store;

export type AppDispatch = AppStore["dispatch"];
