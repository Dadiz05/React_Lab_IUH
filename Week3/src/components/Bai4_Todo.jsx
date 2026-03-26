import { useState, useCallback } from "react";
import React from "react";

const TodoItem = React.memo(({ todo, onDelete }) => {
  console.log("render item", todo.id);

  return (
    <div>
      {todo.text}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
});

export default function Bai4_Todo() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    setTodos((prev) => [...prev, { id: Date.now(), text }]);
    setText("");
  };

  const handleDelete = useCallback((id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <div>
      <h2>Bài 4 - Todo</h2>

      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTodo}>Add</button>

      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={handleDelete} />
      ))}
    </div>
  );
}
