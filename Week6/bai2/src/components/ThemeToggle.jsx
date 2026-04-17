import { useRecoilState } from 'recoil'
import themeState from '../states/themeState'

export default function ThemeToggle() {
  const [theme, setTheme] = useRecoilState(themeState)

  function setLight() {
    setTheme('light')
    localStorage.setItem('theme', 'light')
  }

  function setDark() {
    setTheme('dark')
    localStorage.setItem('theme', 'dark')
  }

  return (
    <div>
      <button onClick={setLight}>Light</button>
      <button onClick={setDark}>Dark</button>
    </div>
  )
}