import { configureStore } from "@reduxjs/toolkit";
import notepadSlice from "../features/notePad";

const store = configureStore({
    reducer: {
        notepad: notepadSlice,
    }
})

export default store;