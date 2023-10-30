import { createSlice } from "@reduxjs/toolkit";

// Slice == Action + Reducer
// NoteSlice = NoteAction + NoteReducer

// RTK
/**
 * Good point:
 * - Decreate OverHead in order to writing Redux
 * - No need to write ActionType => Name: slice/methodReducers
 * - No need to write ActionCreator => Name: methodReducers => create ActionCreator
 * - No need integrate DevTool, Thunk (Built-in)
 * - No need CombineReducer, and be able to install multiple reducer at configureStore
 * - Immer Lib
 * - Auto return newState
 *
 *  Weak point:
 *  Everything is Behind the scene (Redux Abstract)
 */

//  State name
const initialState = {
  notes: [],
};

const noteSlice = createSlice({
  //  Slice name
  name: "note3", //type: note3/addNote, type : note3/deleteNote
  initialState, //: initialState,
  reducers: {
    addNote: (state, action) => {
      // Immutable : no revise current state
      // const newNotes = [...state.notes, action.payload]; // Immutable
      state.notes.push(action.payload); // syntax mutable => with Immer => do Immutable
      // return { notes: newNotes }; //auto return newState
    },
    deleteNote: (state, action) => {
      // const newNotes = state.notes.filter((note) => note.id !==action.payload)
      // return {notes: newNotes}

      // Mutable way(syntax)
      const foundedIndex = state.notes.findIndex(
        (note) => note.id === action.payload
      );
      if (foundedIndex !== -1) state.notes.splice(foundedIndex, 1);
    },
  },
});

// AutoGenerate ActionCreator ===> noteSlice.action

export const { addNote, deleteNote } = noteSlice.actions;

//dispatch(addNote(note))

// AutoGenerate NoteReducer
const noteReducer = noteSlice.reducer;

export default noteReducer;
