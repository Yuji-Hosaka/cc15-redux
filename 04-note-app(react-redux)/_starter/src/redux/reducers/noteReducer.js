import { ADD_NOTE, EDIT_NOTE, DELETE_NOTE } from "../actions/actionType";
/**
 *  note: {id: string, title: string, content: string}
 */

const initialState = {
  notes: [],
};

// Reducer == Fn 2 parameters
export const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return { ...state, notes: [...state.notes, action.payload] };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((n) => n.id !== action.payload),
      };
    default:
      return state;
  }
};

export default noteReducer;
