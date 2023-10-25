import { ADD_NOTE, EDIT_NOTE, DELETE_NOTE } from "./actionType";

// action creator

export const addNoteAction = (note) => {
  return {
    type: ADD_NOTE,
    payload: note,
  };
};

export const deleteNoteAction = (noteId) => {
  return {
    type: DELETE_NOTE,
    payload: noteId,
  };
};
