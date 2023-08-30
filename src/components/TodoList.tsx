import React, { useState } from "react";
import "./TodoList.css";

export const TodoList = () => {
  const todos = ["Buy groceries", "Clean the house", "Walk the dog"];
  const [selectedItems, setSelectedItems] = useState<boolean[]>(
    new Array(todos.length).fill(false)
  );

  const handleCheckboxChange = (index: number) => {
    const updatedSelectedItems = [...selectedItems];
    updatedSelectedItems[index] = !updatedSelectedItems[index];
    setSelectedItems(updatedSelectedItems);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">To-Do List</h2>
      <div className="list-group">
        {todos.map((todo, index) => (
          <div
            key={index}
            className={`list-group-item  ${
              selectedItems[index] ? "active" : ""
            }`}
          >
            <div className="form-check-label">
              <input
                type="checkbox"
                className="form-check-input"
                checked={selectedItems[index]}
                onChange={() => handleCheckboxChange(index)}
              />
              {todo}
            </div>
          </div>
        ))}
      </div>
      {todos.length === 0 && <p className="mt-3">No to-dos at the moment.</p>}
    </div>
  );
};
