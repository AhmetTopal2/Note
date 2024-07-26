import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [
    {
      id: 1,
      title: "Note 1",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, amet odit? Nesciunt obcaecati unde veniam ad! Odio debitis assumenda ad.",
      author: "John Doe",
      category: "personal",
      date: new Date().toDateString(),
    },
  ],
};

const notesSlice = createSlice({
  name: "notes",
  initialState: initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload);
      action.payload.date = new Date().toLocaleDateString();
    },
    clearNotes: (state) => {
      state.notes = [];
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
  },
});

export const { addNote, clearNotes, deleteNote } = notesSlice.actions;
export default notesSlice.reducer;
