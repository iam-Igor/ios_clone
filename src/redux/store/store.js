import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers/reducers";
// import calculator from "../reducers/calculator";

export const ADD_NOTE = "ADD_NOTE";
export const PHOTO = "PHOTO";
export const VALUE_1 = "VALUE_1";
export const VALUE_2 = "VALUE_2";
export const VALUE_TEMP = "VALUE_TEMP";
export const VALUE_VIEW = "VALUE_VIEW";
export const RESULT = "RESULT";
export const OPERATION = "OPERATION";
export const EVALUATE = "EVALUATE";

// const bigReducer = combineReducers({
//    main: mainReducer,
//    calc: calculator,
// });

const store = configureStore({
   reducer: mainReducer,
   //  reducer: bigReducer,
});
export default store;
