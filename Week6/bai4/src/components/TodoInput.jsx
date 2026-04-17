import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import todoState from '../states/todoState.jsx'

export default function TodoInput() {
  const [text, setText] = useState('')
  const setTodos = useSetRecoilState(todoState)

  const addTodo = () => {
    if (!text.trim()) return

    setTodos(prev => [
      ...prev,
      {
        id: Date.now(),
        text,
        completed: false
      }
    ])

    setText('')
  }

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nhập todo..."
      />
      <button onClick={addTodo}>Add</button>
    </div>
  )
}