export default function Completed(props) {
  const { isComplete, completeTodo } = { ...props };
  return (
    <div className="activetodos-container">
      {isComplete.map((item) => (
        <div key={item.id} className="todo">
          <input type="checkbox" value={item.id} checked={item.completed} />
          <span
            className={
              item.completed ? "todo-item todo-item-done" : "todo-item"
            }
          >
            {item.text}
          </span>
        </div>
      ))}
    </div>
  );
}
