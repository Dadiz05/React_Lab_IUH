import { useRecoilValue } from 'recoil'
import authState from './states/authState'
import Login from './components/Login'
import UserProfile from './components/UserProfile'

function App() {
  const user = useRecoilValue(authState)

  return (
    <div>
      <nav>
        <h2>My App</h2>
        {user && <UserProfile />}
      </nav>

      <main>
        {user ? (
          <h1>Chào mừng bạn quay trở lại!</h1>
        ) : (
          <Login />
        )}
      </main>
    </div>
  )
}

export default App