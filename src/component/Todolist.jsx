import { useState, useEffect } from "react";
import Todo from "./Todo";
import Todo_form from "./Todo_form";
export default function Todolist(props) {
  const { todos, completeTodo, addTodo, removeTodo } = { ...props };

  return (
    <div className="todo-list">
      <Todo_form addTodo={addTodo} />
      <Todo todos={todos} removeTodo={removeTodo} completeTodo={completeTodo} />
    </div>
  );
}
