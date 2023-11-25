import { ADD_NOTE, PHOTO } from "../store/store";

const initialState = {
  notes: [],
  photos: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return { ...state, notes: [...state.notes, action.payload] };
    case PHOTO:
      return { ...state, photos: [...state.photos, action.payload] };
    default:
      return state;
  }
};

export default mainReducer;
