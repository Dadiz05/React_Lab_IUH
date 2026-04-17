import { useRecoilValue } from 'recoil'
import counterAtom from '../states/counterAtom'

export default function ComA() {
  const value = useRecoilValue(counterAtom)

  return (
    <div>
      <h2>ComA: {value}</h2>
    </div>
  )
}