import React, { useState } from "react";

function Form(props) {

    const [name, setName] = useState('');

    function handleChange(e) {
    setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.addTask(name);
        setName("");
    }

  return (
    <form className="flex items-center justify-center mt-10 rounded">
        <input
            type="text"
            id="new-todo-input"
            className="input input__lg"
            name="text"
            autoComplete="off"
            placeholder="Create a new todo..." className="py-2 px-5 rounded-lg"
            value={name}
            onChange={handleChange}
        />
        <button type="submit" className="invisible" onClick={handleSubmit}>
        Add
        </button>
    </form>
  );
}

export default Form;