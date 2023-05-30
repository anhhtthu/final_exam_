import { useState } from "react";
export default function Todo_form(props) {
  const [input, setInput] = useState("");

  const { addTodo } = { ...props };

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });
    setInput("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="input-todo"
        type="text"
        value={input}
        placeholder="Add details..."
        onChange={(e) => {
          let v = e.target.value;
          setInput(v);
        }}
      />
      <button className="input-button" onClick={handleSubmit}>
        Add
      </button>
    </form>
  );
}
