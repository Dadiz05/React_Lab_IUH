import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Products from './components/Products'
import ProductDetail from './components/ProductDetail'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Routes>
        <Route path='/' element={<Products />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/products/:id' element={<ProductDetail />}></Route>
      </Routes>
    </>
  )
}

export default App
