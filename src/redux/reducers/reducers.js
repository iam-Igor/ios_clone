import {
   ADD_NOTE,
   PHOTO,
   VALUE_1,
   VALUE_2,
   VALUE_TEMP,
   VALUE_VIEW,
} from "../store/store";

const initialState = {
   notes: [],
   photos: [],
   value1: "0",
   value2: "0",
   tempValue: "0",
   valueView: "0",
};

const mainReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_NOTE:
         return { ...state, notes: [...state.notes, action.payload] };
      case PHOTO:
         return { ...state, photos: [...state.photos, action.payload] };

      // calculator
      case VALUE_1:
         return { ...state, value1: action.payload };
      case VALUE_2:
         return { ...state, value2: action.payload };
      case VALUE_TEMP:
         return { ...state, tempValue: action.payload };
      case VALUE_VIEW:
         return { ...state, valueView: action.payload };
      default:
         return state;
   }
};

export default mainReducer;
