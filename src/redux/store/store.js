import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers/reducers";

export const ADD_NOTE = "ADD_NOTE";
export const PHOTO = "PHOTO";

const store = configureStore({
  reducer: mainReducer,
});
export default store;
