import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import DashBoard from '../../bai4/src/components/DashBoard'
import Order from '../../bai4/src/components/Order'
import Setting from '../../bai4/src/components/Setting'
import Profile from '../../bai4/src/components/Profile'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path='/dashboard' element={<DashBoard />}>
          <Route path='profile' element={<Profile />}> </Route>
          <Route path='order' element={<Order />}> </Route>
          <Route path='setting' element={<Setting />}> </Route>
        </Route>
      </Routes >
    </>
  )
}

export default App
