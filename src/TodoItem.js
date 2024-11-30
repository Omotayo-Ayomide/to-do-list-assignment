import React from 'react';

function TodoItem({ task, deleteTask, toggleTask }) {
  return (
    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <span 
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
          flex: 1, // Makes the span take available space
          cursor: 'pointer', // Makes the task text clickable
        }}
        onClick={() => toggleTask(task.id)}
      >
        {task.text}
      </span>
      <button 
        onClick={() => deleteTask(task.id)} 
        style={{
          padding: '5px 10px', 
          backgroundColor: '#f44336', 
          color: 'white',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;

