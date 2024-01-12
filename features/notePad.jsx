import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const notepadSlice = createSlice({
    name: "notepad",
    initialState: initialState,
    reducers: {
        saved: (state,action) => {
            state.push(action.payload)
        },
        removed: (state,action) => {
            state.splice(action.payload,1)
        }
    }
})

const { saved , removed } = notepadSlice.actions ; 

export default notepadSlice;
export { saved , removed };
