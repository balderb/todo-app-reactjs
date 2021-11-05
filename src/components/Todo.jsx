import React, { useState } from "react";

function Todo(props) {
    
    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState('');

    function handleChange(e) {
        setNewName(e.target.value);
      }
    
    function handleSubmit(e) {
        e.preventDefault();
        props.editTask(props.id, newName);
        setNewName("");
        setEditing(false);
      }

    const editingTemplate = (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor={props.id}>
              New name for {props.name}
            </label>
            <input id={props.id} type="text" value={newName}
            onChange={handleChange} />
          </div>
          <div>
            <button type="button">
              Cancel
            </button>
            <button type="submit">
              Save
            </button>
          </div>
        </form>
      );
      
      const viewTemplate = (
        <div>
          <div className="flex justify-between">
              <input
                id={props.id}
                type="checkbox"
                defaultChecked={props.completed}
                onChange={() => props.toggleTaskCompleted(props.id)}
              />
              <label htmlFor={props.id}>
                {props.name}
              </label>
            
            <div>
              <button type="button" className="px-2">
                Edit
              </button>
              <button
                type="button"
                onClick={() => props.deleteTask(props.id)}
              >
                Delete 
              </button>
            </div>
            </div>
        </div>
      );    

    return <li>{isEditing ? editingTemplate : viewTemplate}</li>;
}

export default Todo
