import React from "react";


function Task({ task, onToggleTask, onDeleteTask }) {
    const taskcompleted = {
      textDecoration: task.complete ? "line-through" : "none",
    };
  
    return (
      <li style={taskcompleted}>
        <span>
          {task.description}
        </span>
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
  
  function Tasklist({ tasks, onToggleTask, onDeleteTask }) {
    return (
      <div className="list">
        <ul>
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onToggleTask={onToggleTask}
              onDeleteTask={onDeleteTask}
            />
          ))}
        </ul>
      </div>
    );
  }
export default  Tasklist;
