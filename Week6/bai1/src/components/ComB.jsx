import { useRecoilState } from 'recoil'
import counterAtom from '../states/counterAtom'

export default function ComB() {
  const [value, setValue] = useRecoilState(counterAtom)

  return (
    <div>
      <h2>ComB</h2>
      <button onClick={() => setValue(value + 1)}>Tăng</button>
      <button onClick={() => setValue(value - 1)}>Giảm</button>
    </div>
  )
}