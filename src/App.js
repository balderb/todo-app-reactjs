import { useState, useEffect } from 'react';
import Hero from "./components/Hero"
import Logo from "./components/Logo"
import List from "./components/List"

import { v4 as uuidv4 } from "uuid"

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

  const taskList = props.tasks.map(task => task.name);

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

        <ul>
          { taskList }
        </ul>

      </main>
    </>
  );
}

export default App;

