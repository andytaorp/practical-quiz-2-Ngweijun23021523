import React, { useState } from "react";

export default function Form({ onAddTask }) {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Math.floor(Math.random() * 10000),
      description,
      complete: false,
    };
    onAddTask(newTask);
    setDescription("");
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What is the new task</h3>
      <input
        type="text"
        placeholder="Item"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />      
      <button type="submit">Add</button>


    </form>
  )
    
  
}
