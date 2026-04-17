import { useRecoilValue, useSetRecoilState } from 'recoil'
import authState from '../states/authState'

export default function UserProfile() {
  const user = useRecoilValue(authState)
  const setUser = useSetRecoilState(authState)

  if (!user) return null

  return (
    <div>
      Xin chào, <strong>{user.name}</strong>
      <button onClick={() => setUser(null)}>
        Đăng xuất
      </button>
    </div>
  )
}