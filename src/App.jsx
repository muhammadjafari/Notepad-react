import { useRef } from "react";
import "./App.css";
import Note from "./components/note/note";
import { useSelector, useDispatch } from "react-redux";
import { saved } from "../features/notePad";

function App() {
  const notes = useSelector((state) => state.notepad.notes);
  const inputValue = useRef("");
  const dispatch = useDispatch();

  const onclickHandler = () => {
    dispatch(saved(inputValue.current.value));
  };

  let notesContainer = [];

  if (notes.length == 0) {
    notesContainer = (
      <div className="empty-container">
        <h3>empty</h3>
      </div>
    );
  } else {
    notesContainer = notes.map((note) => (
      <Note key={note.id} text={note.text} id={note.id} />
    ));
  }

  return (
    <>
      <div className="notes-container">
        <div className="input-container">
          <input
            type="text"
            placeholder="write your note here ..."
            ref={inputValue}
          />
          <button onClick={onclickHandler}>ADD NOTE</button>
        </div>
        <div>{notesContainer}</div>
      </div>
    </>
  );
}

export default App;
