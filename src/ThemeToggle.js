import React from 'react';

function ThemeToggle({ toggleTheme }) {
  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default ThemeToggle;
