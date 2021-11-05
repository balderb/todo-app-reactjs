import React, { useState } from "react";

function Todo(props) {
    
    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState('');

    function handleChange(e) {
        setNewName(e.target.value);
      }      

    const editingTemplate = (
        <form className="stack-small">
          <div className="form-group">
            <label className="todo-label" htmlFor={props.id}>
              New name for {props.name}
            </label>
            <input id={props.id} className="todo-text" type="text" value={newName}
  onChange={handleChange} />
          </div>
          <div className="btn-group">
            <button type="button" className="btn todo-cancel">
              Cancel
            </button>
            <button type="submit" className="btn btn__primary todo-edit">
              Save
            </button>
          </div>
        </form>
      );
      
      const viewTemplate = (
        <div className="stack-small">
          <div className="c-cb">
              <input
                id={props.id}
                type="checkbox"
                defaultChecked={props.completed}
                onChange={() => props.toggleTaskCompleted(props.id)}
              />
              <label className="todo-label" htmlFor={props.id}>
                {props.name}
              </label>
            </div>
            <div className="btn-group">
            <button type="button" className="btn" onClick={() => setEditing(true)}>
                Edit
            </button>

            <button
                type="button"
                className="btn todo-cancel"
                onClick={() => setEditing(false)}
                >
                Cancel
            </button>

            </div>
        </div>
      );      

    return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
    
}

export default Todo
