import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import './App.css'

function App() {
  return (
    <div className="container">
      <h1>My Todo List</h1>
      <TodoInput />
      <TodoList />
    </div>
  )
}

export default App