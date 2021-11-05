import React, { useState } from "react";
import React from "react";

function handleSubmit(e) {
    e.preventDefault();
    this.props.addTask("Say Hello");
}

function Form(props) {
  return (
    <form>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        placeholder="Enter your todo item"
      />
      <button type="submit" className="btn btn__primary btn__lg" onClick={handleSubmit}>
        Add
      </button>
    </form>
  );
}

export default Form;
