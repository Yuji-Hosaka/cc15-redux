import { createSlice } from "@reduxjs/toolkit";

// Slice == Action + Reducer
// NoteSlice = NoteAction + NoteReducer

// ชื่อ State
const initialState = {
  note2: [],
};

const noteSlice = createSlice({
  // ชื่อ Slice
  name: "note3", //type: note3/addNote, type : note3/deleteNote
  initialState, //: initialState,
  reducers: {
    addNote: (state, action) => {
      const newNotes = [...state.notes, action.payload];
      return { notes: newNotes };
    },
  },
});

// AutoGenerate ActionCreator ===> noteSlice.action

export const { addNote } = noteSlice.actions;

//dispatch(addNote(note))

// AutoGenerate NoteReducer
const NoteReducer = noteSlice.reducer;

export default NoteReducer;
