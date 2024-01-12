import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notes: [
    ]
};

const notepadSlice = createSlice({
    name: "notepad",
    initialState: initialState,
    reducers: {
        saved: (state,action) => {
            state.notes.push(action.payload)
        },
        removed: (state,action) => {
            state.notes.splice(action.payload,1)
        }
    }
})

const { saved , removed } = notepadSlice.actions ; 
export { saved , removed };
export default notepadSlice.reducer;

