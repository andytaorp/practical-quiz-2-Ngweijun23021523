import React, { useState } from "react";
import Form from "./Form";
import Tasklist from "./Task";


function App() {
  const [tasks, setTasks] = useState([]);

  const onAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleToggleTask = (id) => {
    setTasks((prevTasks) =>
    prevTasks.map((task) =>
    task.id === id ? { ...task, complete: !task.complete } : task
    )
  );
  };

  const onDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app">
      <h1>Task Tracker</h1>
      <Form onAddTask={onAddTask} />
      <Tasklist
        tasks={tasks}
        handleToggleTask={handleToggleTask}
        onDeleteTask={onDeleteTask}
      />
      
    </div>
  );
}

export default App;
