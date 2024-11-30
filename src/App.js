import React, { useState, useEffect } from 'react';
import './App.css'; // Import App.css for styling

function App() {
  // State to track tasks and theme
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // Effect to save tasks and theme in localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Save tasks to localStorage
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('theme', theme); // Save theme to localStorage
  }, [theme]);

  // Function to add a new task
  const addTask = (task) => {
    const newTask = { id: Date.now(), text: task, completed: false };
    setTasks([...tasks, newTask]);
  };

  // Function to delete a task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Function to toggle task completion
  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`App ${theme}`}>
      <h1>To-Do List</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <input
        type="text"
        id="taskInput"
        placeholder="Add a new task"
        onKeyDown={(e) => {
          if (e.key === 'Enter' && e.target.value.trim()) {
            addTask(e.target.value.trim());
            e.target.value = ''; // Clear the input field
          }
        }}
      />
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
              }}
              onClick={() => toggleTaskCompletion(task.id)}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
