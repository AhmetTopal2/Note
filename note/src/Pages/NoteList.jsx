import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { deleteNote } from "../redux/features/notes/notesSlice"; // Import the deleteNote action

function NoteList({ note }) {
  const { id, title, author, date, content } = note;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteNote(id)); // Dispatch the deleteNote action with the note's id
    toast.success("Note deleted successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="overflow-hidden relative flex flex-col gap-4 justify-between rounded-2xl border border-white-222 bg-white p-4 md:p-6 px-8 w-60">
      <h4 className="font-medium text-lg duration-300 group-hover:text-white">
        {title}
      </h4>
      <p className="text-sm xl:text-base">
        {author} - {date}
      </p>
      <p className="text-sm xl:text-base">
        <span className="font-medium">Note:</span>
        {content}
      </p>
      <div>
        <button
          className="inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default NoteList;
