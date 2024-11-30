import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, deleteTask, toggleTask }) {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <TodoItem 
            key={task.id} 
            task={task} 
            deleteTask={deleteTask} 
            toggleTask={toggleTask} 
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
