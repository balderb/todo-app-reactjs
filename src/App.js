import { useState, useEffect } from 'react';
import Hero from "./components/Hero"
import Logo from "./components/Logo"
import List from "./components/List"
import Todo from './components/Todo'
import Form from './components/Form.jsx'
import FilterButton from './components/FilterButton';
import { v4 as uuidv4 } from "uuid"
import { nanoid } from "nanoid";

const getLocalStorage = () => {
  let items = localStorage.getItem("items")

  if (items) {
    return JSON.parse(localStorage.getItem("items"))
  } else {
    return []
  }
}

const App = (props) => {
  const [text, setText] = useState('')
  const [items, setItems] = useState(getLocalStorage())
  const [tasks, setTasks] = useState(props.tasks);

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
  }
  
  function deleteTask(id) {
    console.log(id)
  }
  
  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  // define the custom handleSubmit here further, on this location
  const handleSubmit = (e) => {
    //  the preventDefault function prevents data to be passed through the address bar
    e.preventDefault()
    
     const newItems = {
      id: uuidv4(),
      title: text,
      // here i think we need to add an additional feature "completed"
     }
     setItems([newItems, ...items])
     setText("")
  }

  const deleteItem = (id) => {
    setItems(items.filter((item) =>item.id !== id))
  }

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items))
  }, [items])

  const taskList = tasks.map(task => (
    <Todo 
      id={task.id} 
      name={task.name} 
      completed={task.completed} 
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      
      />
    )
  );

  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  return (
    <>
      <main>
        <Logo/>
        <Hero/>
        <form className="flex items-center justify-center mt-10" onSubmit={ handleSubmit }>
          <input className="py-2 px-5 rounded-lg" type="text" name="text" placeholder="Enter your todo item" autoComplete="off"
          value= { text }
          onChange={(e) => setText(e.target.value)}
          >
          </input>
        </form>

        <List completed={false} items={items} deleteItem={deleteItem} id="todo-0"/>

        { /* mdn docs */ }  

        <div className="text-lg font-bold pt-5">MDN docs helpsheet from here</div>
          <h1>TodoMatic</h1>
          <Form addTask={addTask} />
          <div className="filters btn-group stack-exceptions">
            <FilterButton/>
            <FilterButton/>
            <FilterButton/>
          </div>
          <h2 id="list-heading">{headingText}</h2>
        <ul>
          { taskList }
        </ul>
      </main>
    </>
  );
}

export default App;
