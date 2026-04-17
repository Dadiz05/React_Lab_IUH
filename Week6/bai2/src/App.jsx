import './App.css'
import { useRecoilValue } from 'recoil'
import themeState from './states/themeState'
import ThemeToggle from './components/ThemeToggle'

function App() {
  const theme = useRecoilValue(themeState)
  console.log(theme)

  return (
    <div className={`app-container ${theme}`}>
      <h1>Chế độ hiện tại: {theme}</h1>
      <ThemeToggle />
    </div>
  )
}

export default App