import React, { useState } from 'react';

function AddTodo({ addTask }) {
  const [task, setTask] = useState('');

  const handleAddClick = () => {
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Enter new task" 
      />
      <button onClick={handleAddClick}>Add Task</button>
    </div>
  );
}

export default AddTodo;
