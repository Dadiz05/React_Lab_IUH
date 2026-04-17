import { useSetRecoilState } from 'recoil'
import todoState from '../states/todoState.jsx'
import { useState } from 'react'

export default function TodoItem({ todo }) {
  const setTodos = useSetRecoilState(todoState)
  const [edit, setEdit] = useState(false)
  const [text, setText] = useState(todo.text)

  const deleteTodo = () => {
    setTodos(prev => prev.filter(t => t.id !== todo.id))
  }

  const toggleTodo = () => {
    setTodos(prev =>
      prev.map(t =>
        t.id === todo.id
          ? { ...t, completed: !t.completed }
          : t
      )
    )
  }

  const updateTodo = () => {
    setTodos(prev =>
      prev.map(t =>
        t.id === todo.id ? { ...t, text } : t
      )
    )
    setEdit(false)
  }

  return (
    <div style={{ margin: 10 }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={toggleTodo}
      />

      {edit ? (
        <>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={updateTodo}>Save</button>
        </>
      ) : (
        <span
          style={{
            textDecoration: todo.completed ? 'line-through' : 'none'
          }}
        >
          {todo.text}
        </span>
      )}

      <button onClick={() => {
        if (!edit) setText(todo.text);
        setEdit(!edit);
      }}>
        {edit ? 'Cancel' : 'Edit'}
      </button>
      <button onClick={deleteTodo}>Delete</button>
    </div>
  )
}