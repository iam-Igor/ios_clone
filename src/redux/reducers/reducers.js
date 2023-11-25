import { ADD_NOTE, PHOTO, TRANSITION } from "../store/store";

const initialState = {
  notes: [],
  photos: [],
  transition: false,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return { ...state, notes: [...state.notes, action.payload] };
    case PHOTO:
      return { ...state, photos: [...state.photos, action.payload] };
    case TRANSITION:
      return { ...state, transition: action.payload };
    default:
      return state;
  }
};

export default mainReducer;
