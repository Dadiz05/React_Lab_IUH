import { useRecoilValue } from 'recoil'
import counterAtom from './states/counterAtom'
import ComA from './components/ComA'
import ComB from './components/ComB'
import { useEffect } from 'react'


function App() {

const value = useRecoilValue(counterAtom)

useEffect(() => {
  console.log(value)
}, [value])


  return (
    <>
      <h1>App: {value}</h1>
      <ComA />
      <ComB />
    </>
  )
}

export default App