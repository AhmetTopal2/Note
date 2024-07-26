import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { clearNotes } from "../redux/features/notes/notesSlice";
import { toast } from "react-toastify";

function Header() {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Take Note
            </h1>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-4">
              <button
                className="inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                type="button"
                onClick={() => history.push("/")}
              >
                Home
              </button>
            </div>
            <div className="flex items-center gap-4">
              <button
                className="inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                type="button"
                onClick={() => history.push("/create-note")}
              >
                Create Note
              </button>
            </div>
            <div className="flex items-center gap-4">
              <button
                className="inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                type="button"
                onClick={() => dispatch(clearNotes() && toast.success("Notes cleared successfully"))}
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
