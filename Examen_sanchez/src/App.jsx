import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Plantilla from './layout/Plantilla'
import Productos from './pages/Productos'
import DetallesProducto from './pages/DetallesProducto'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Plantilla/>}>
            <Route index element={<Productos/>}/>
            <Route path='/:categoria' element={<DetallesProducto/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
