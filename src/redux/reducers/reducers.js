import { ADD_NOTE } from "../store/store";

const initialState = {
  notes: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return { ...state, notes: [...state.notes, action.payload] };
    default:
      return state;
  }
};

export default mainReducer;
