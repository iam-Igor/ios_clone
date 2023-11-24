import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers/reducers";

export const ADD_NOTE = "ADD_NOTE";

const store = configureStore({
  reducer: mainReducer,
});
export default store;
