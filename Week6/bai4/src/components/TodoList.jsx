import { useRecoilValue } from 'recoil'
import todoState from '../states/todoState.jsx'
import TodoItem from './TodoItem.jsx'

export default function TodoList() {
  const todos = useRecoilValue(todoState)

  return (
    <div>
      {todos.length === 0 ? (
        <p>Chưa có todo</p>
      ) : (
        todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))
      )}
    </div>
  )
}