import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NoteList from "./NoteList";

function Notes() {
  const { category } = useParams();
  const notes = useSelector((state) => state.notes.notes);

  // Filter notes based on category
  const filteredNotes = category
    ? notes.filter((note) => note.category === category)
    : notes;

  return (
    <div className="flex justify-center gap-20 flex-wrap p-28">
      {filteredNotes.length > 0 ? (
        filteredNotes.map((note) => <NoteList key={note.id} note={note} />)
      ) : (
        <span className="flex justify-center">
          <h1 className="text-3xl">No Notes Found</h1>
        </span>
      )}
    </div>
  );
}

export default Notes;
