import { useState } from "react";
import { BsTrash } from "react-icons/bs";
export default function Todo(props) {
  const { todos, setIsComplete, completeTodo, removeTodo } = { ...props };

  return (
    <div className="todos-container">
      {todos.map((item) => (
        <div className="todo" key={item.id}>
          <div className="left-todo">
            <input
              type="checkbox"
              className="check-todo"
              value={item.id}
              checked={item.completed}
              onChange={() => {
                completeTodo(item.id);
              }}
            />
            <span
              className={
                item.completed ? "todo-item todo-item-done" : "todo-item"
              }
            >
              {item.text}
            </span>
          </div>
          <div className="icons">
            <BsTrash
              onClick={() => removeTodo(item.id)}
              className={
                item.isComplete ? "delete-icon complete" : "delete-icon"
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
}
