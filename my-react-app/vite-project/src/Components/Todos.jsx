import React from "react";

const Todos = ({ todos }) => {
  const handleCheckboxChange = (id) => {
    // Implement the logic to handle checkbox change
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleCheckboxChange(todo.id)}
            />
            <span>{todo.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
