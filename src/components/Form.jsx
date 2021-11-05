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
    <form className=" text-black flex items-center justify-center mt-10 rounded ring-offset-4 ring-offset-blue-200">
        <input
            type="text"
            id="new-todo-input"
            className="input input__lg"
            name="text"
            autoComplete="off"
            placeholder="Create a new todo..." className="py-2 px-5 rounded-lg text-gray-400"
            value={name}
            onChange={handleChange}
            onSubmit={handleSubmit}
        />
        <button type="submit" className="invisible" onClick={handleSubmit}>
        Add
        </button>
    </form>
  );
}

export default Form;