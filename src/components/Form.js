import React from "react";

function Task({ task, onToggleTask, onDeleteTask }) {
  const taskCompleted = {
    textDecoration: task.complete ? "line-through" : "none",
  };

  return (
    <li style={taskCompleted}>
      <span>{task.description}</span>
      <input
        type="checkbox"
        checked={task.complete}
        onChange={() => onToggleTask(task.id)}  
      />
      <button onClick={() => onDeleteTask(task.id)} className="delete-button">
        Delete
      </button>
    </li>
  );
}

export default Task;
