import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navigate from "./component/Navigate";
import { useState, useEffect } from "react";

import Todolist from "./component/Todolist";
import Active from "./component/pages/Active";
import All from "./component/pages/All";
import Completed from "./component/pages/Completed";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [isComplete, setIsComplete] = useState([]);
  const [activeTodos, setActiveTodos] = useState([]);

  useEffect(() => {
    const temp = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(temp);
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem("todos", temp);
  }, [todos]);

  const addTodo = (todo) => {
    const newTodo = [todo, ...todos];
    setTodos(newTodo);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
    const newCompleteTodos = [updatedTodos, ...isComplete];
    setIsComplete(newCompleteTodos);
    console.log(newCompleteTodos);

    let filterActive = todos.filter((todo) => todo.id !== id);
    setActiveTodos(filterActive);
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  };
  return (
    <div className="App">
      <div className="header">
        <h1>#todo</h1>
      </div>
      <div className="todo-list">
        <Navigate />
        <Routes>
          <Route
            path="/"
            element={
              <Todolist
                addTodo={addTodo}
                completeTodo={completeTodo}
                todos={todos}
                setTodos={setTodos}
                isComplete={isComplete}
                setIsComplete={setIsComplete}
                removeTodo={removeTodo}
              />
            }
          />
          <Route
            path="/active"
            element={
              <Active
                removeTodo={removeTodo}
                activeTodos={activeTodos}
                todos={todos}
              />
            }
          />
          <Route
            path="/completed"
            element={
              <Completed
                isComplete={isComplete}
                todos={todos}
                completeTodo={completeTodo}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}
