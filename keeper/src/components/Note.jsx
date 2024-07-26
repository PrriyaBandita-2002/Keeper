import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

function Note(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [newContent, setNewContent] = useState(props.content);

  function handleDeleteClick() {
    props.onDelete(props.id);
  }

  function handleEditClick() {
    setIsEditing(true);
  }

  function handleSaveClick() {
    props.onEdit(props.id, newContent);
    setIsEditing(false);
  }

  function handleChange(event) {
    setNewContent(event.target.value);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      {isEditing ? (
        <textarea value={newContent} onChange={handleChange} />
      ) : (
        <p>{props.content}</p>
      )}
      <button onClick={handleDeleteClick}>
        {" "}
        <DeleteIcon />
      </button>
      {isEditing ? (
        <button onClick={handleSaveClick}>Save</button>
      ) : (
        <button onClick={handleEditClick}>
          <EditIcon />
        </button>
      )}
    </div>
  );
}

export default Note;
