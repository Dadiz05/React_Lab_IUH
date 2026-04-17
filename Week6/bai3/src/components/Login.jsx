import { useSetRecoilState } from 'recoil'
import authState from '../states/authState'

export default function Login() {
  const setUser = useSetRecoilState(authState)

  const handleLogin = () => {
    setUser({
      name: 'Nguyen Gia Vi',
      email: 'vinguyengia60@gmail.com'
    })
  }

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}