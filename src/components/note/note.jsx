import React from "react";
import { useDispatch } from "react-redux";
import { removed } from "../../../features/notePad";

const Note = (props) => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(removed(props.id));
  };

  return (
    <>
      <div>
        <p>note: {props.text}</p>
        <button onClick={onClickHandler}>delete</button>
      </div>
    </>
  );
};

export default Note;
