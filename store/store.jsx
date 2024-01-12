import { configureStore } from "@reduxjs/toolkit";
import notepadSlice from "../features/notePad";

console.log("store",notepadSlice);

// const store = configureStore({
//     reducer: {
//         notepad: notepadSlice,
//     }
// })

const store = configureStore({
    reducer:{
        notepad: notepadSlice,
        
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

console.log(store);

export default store;