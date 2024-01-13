import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
  lastId: 0,
};

const notepadSlice = createSlice({
  name: "notepad",
  initialState: initialState,
  reducers: {
    saved: (state, action) => {
      state.notes.push({ text: action.payload, id: state.lastId });
      state.lastId++;
    },
    removed: (state, action) => {
      const indexOfObject = state.notes.findIndex((note) => {
        return note.id === action.payload;
      });
      state.notes.splice(indexOfObject, 1);
    },
  },
});

const { saved, removed } = notepadSlice.actions;
export { saved, removed };
export default notepadSlice.reducer;
