import { configureStore } from "@reduxjs/toolkit";

import toDoSlice from "./toDoSlice";

const store = configureStore({
  reducer: {
    toDo: toDoSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppStore = typeof store;

export type AppDispatch = AppStore["dispatch"];
