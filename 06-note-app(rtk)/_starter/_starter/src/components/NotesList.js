import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteNote } from "../redux/noteSlice";

import "./NotesList.css";

const NotesList = () => {
  const dispatch = useDispatch();

  // const data = useSelector((stores) => stores.note1)
  // const data = useSelector((state) => state.note1)
  const data = useSelector((entireStore) => entireStore.note1);
  console.log("data", data);
  const handleDelete = (id) => {
    dispatch(deleteNote(id));
  };

  return (
    <>
      <h1>Notes List</h1>

      <div className="item-container">
        {data.notes.map((note) => (
          <div className="item-content" key={note.id}>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <button onClick={() => handleDelete(note.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default NotesList;
