import { useEffect, useState } from "react";

const API = "http://localhost:3000/todos"; // chạy json-server

export default function Bai5_CRUD_Todo() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchTodos = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async () => {
    if (!text) return;

    setLoading(true);

    try {
      const res = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      const newTodo = await res.json();
      setTodos((prev) => [...prev, newTodo]);
      setText("");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteTodo = async (id) => {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div>
      <h2>Bài 5 - CRUD Todo</h2>

      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTodo} disabled={loading}>
        {loading ? "Adding..." : "Add"}
      </button>

      {todos.map((t) => (
        <div key={t.id}>
          {t.text}
          <button onClick={() => deleteTodo(t.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
