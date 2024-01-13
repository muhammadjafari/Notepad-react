import { useEffect, useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
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
      <div>
        <p>empty</p>
      </div>
    );
  } else {
    notesContainer = notes.map((note) => (
      <Note key={note.id} text={note.text} id={note.id} />
    ));
  }

  return (
    <>
      <div>
        <div>
          <input type="text" ref={inputValue} />
          <button onClick={onclickHandler}>add</button>
        </div>
        <div>{notesContainer}</div>
      </div>
    </>
  );
}

export default App;
