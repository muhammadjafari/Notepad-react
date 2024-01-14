import React from "react";
import { useDispatch } from "react-redux";
import { removed } from "../../../features/notePad";
import "./note.css";

const Note = (props) => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(removed(props.id));
  };

  return (
    <>
      <div className="note-container">
        <div>
          <span>NOTE ID: {props.id}</span>
          <button onClick={onClickHandler}>delete</button>
        </div>
        <p>{props.text}</p>
      </div>
    </>
  );
};

export default Note;
