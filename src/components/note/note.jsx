import React from "react";

const Note = (props) => {
    console.log("note created");
    
    return(
        <>
            <div>
                <p>note: {props.id}</p>
            </div>
        </>
    )
}

export default Note;